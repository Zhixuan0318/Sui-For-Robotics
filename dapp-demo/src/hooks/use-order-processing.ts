import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useCurrentAccount } from '@mysten/dapp-kit';
import useOrders from './use-orders';
import { useQuery } from '@tanstack/react-query';
import useTwinsRobots from './use-twins-robots';

import { uploadReceipt } from '@/service/pinata';
import { sendWebotsCommand } from '@/actions';

import { addresses, client, digestNames } from '@/utils/constants';

const useOrderProcessing = (orderId: string | null, webotsUrl?: string | null) => {
    const router = useRouter();
    const account = useCurrentAccount();

    const { updateRobotStatus } = useTwinsRobots();

    const { orders, updateOrder } = useOrders(account?.address);
    const [activeOrder, setActiveOrder] = useState<Order>();

    const { data: events } = useQuery({
        queryKey: ['events', addresses.package],
        queryFn: async () => {
            if (activeOrder?.status == 'completed') return [];

            const robotEvents = await client.queryEvents({
                query: {
                    MoveEventModule: { package: addresses.package, module: 'robots' },
                },
            });
            const orderEvents = await client.queryEvents({
                query: {
                    MoveEventModule: { package: addresses.package, module: 'warehouse' },
                },
            });

            const filtered = [...robotEvents.data, ...orderEvents.data].filter(
                (event) => (event.parsedJson as any).order_id == orderId
            );

            return filtered.sort((a, b) => {
                if (!a.timestampMs || !b.timestampMs) return 0;
                return a.timestampMs.localeCompare(b.timestampMs);
            });
        },
        refetchInterval: 2_000,
    });

    useEffect(() => {
        setActiveOrder(orders.find((order) => order.id == orderId));
    }, [orders, orderId, webotsUrl]);

    useEffect(() => {
        if (!events || !activeOrder) return;

        events.map(async (event) => {
            const digests = activeOrder.logs;
            if (digests.includes(event.id.txDigest)) return;

            const json = event.parsedJson as any;

            if (event.type.includes('SelectedRobot')) {
                const robotType = json.robot_type.variant;
                const robotIndex = robotType == 'Picking' ? 0 : robotType == 'Packing' ? 1 : 2;

                activeOrder.robots[robotIndex].id = json.robot_id;
                activeOrder.robots[robotIndex].digest = event.id.txDigest;

                const tx = await client.getTransactionBlock({
                    digest: event.id.txDigest,
                    options: {
                        showInput: true,
                    },
                });

                activeOrder.approvals[robotIndex].digest = event.id.txDigest;
                activeOrder.approvals[robotIndex].address = tx.transaction?.data.sender;

                if (robotIndex == 1)
                    await updateRobotStatus(activeOrder.robots[0].id, 'Picking', true);
                if (robotIndex == 2)
                    await updateRobotStatus(activeOrder.robots[1].id, 'Packing', true);

                await updateRobotStatus(json.robot_id, robotType, false);
            }

            activeOrder.logs[activeOrder.logs.length - 1] = event.id.txDigest;
            if (activeOrder.logs.length < digestNames.length) activeOrder.logs.push('0');

            await updateOrder(activeOrder);
        });
    }, [events, activeOrder?.id]);

    const handleOrderProcessing = useCallback(
        async (processId: 0 | 1 | 2 | 3, timeout: number) => {
            if (!activeOrder) return;

            if (!webotsUrl) await new Promise((resolve) => setTimeout(resolve, timeout));

            const body = {
                orderId: activeOrder.id,
                processId: processId,
                productId: activeOrder.productId,
                robotId: processId > 0 ? activeOrder.robots[processId - 1].id : undefined,
            };

            if (webotsUrl && processId > 0) await sendWebotsCommand(webotsUrl, body);
            else {
                const response = await fetch('/api/robot', {
                    method: 'POST',
                    body: JSON.stringify(body),
                });

                if (response?.status != 200) throw new Error('Order Processing Error');
            }
        },
        [activeOrder, webotsUrl]
    );

    useEffect(() => {
        if (
            activeOrder?.status == 'processing' &&
            activeOrder?.logs.length == digestNames.length &&
            activeOrder.logs[activeOrder.logs.length - 1] != '0'
        ) {
            const completeOrder = async () => {
                await updateRobotStatus(activeOrder.robots[2].id, 'Delivery', true);
                const receipt = await uploadReceipt(activeOrder);
                await updateOrder({ ...activeOrder, receipt, status: 'completed' });
            };

            completeOrder();
        }
    }, [
        activeOrder?.status,
        activeOrder?.logs.length,
        activeOrder?.logs[activeOrder?.logs.length - 1],
    ]);

    useEffect(() => {
        if (!activeOrder) return;
        switch (activeOrder.logs.length) {
            case 2:
                handleOrderProcessing(0, 0);
                break;
            case 3:
                handleOrderProcessing(1, 45_000);
                break;
            case 6:
                handleOrderProcessing(2, 35_000);
                break;
            case 9:
                handleOrderProcessing(3, 42_000);
                break;
        }
    }, [activeOrder?.logs.length]);

    useEffect(() => {
        if ((orders.length && !activeOrder) || activeOrder?.status == 'cancelled')
            router.push('/home/store');
    }, [activeOrder]);

    return { activeOrder };
};

export default useOrderProcessing;
