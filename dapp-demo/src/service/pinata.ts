'use server';

import { PinataSDK } from 'pinata';

import { addresses } from '@/utils/constants';

import { productIdToColor } from '@/utils/formatter';

const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT,
    pinataGateway: process.env.NEXT_PUBLIC_GATEWAY,
});

export const uploadReceipt = async (order: Order): Promise<string> => {
    const productId = productIdToColor(order.productId);
    const json = {
        timestamp: Date.now(),
        orderId: order.id,
        orderedBy: order.wallet,
        product: {
            id: `${productId.toUpperCase()}_CUBE`,
            address: addresses.products[order.productId],
        },
        recipient: {
            wallet: order.wallet,
            address: order.mailingInfo.address,
        },
        tasks: {
            picking: {
                robot: order.robots[0].id,
                digest: order.robots[0].digest,
                approval: order.approvals[0].address,
            },
            packing: {
                robot: order.robots[1].id,
                digest: order.robots[1].digest,
                approval: order.approvals[1].address,
            },
            delivery: {
                robot: order.robots[2].id,
                digest: order.robots[2].digest,
                approval: order.approvals[2].address,
            },
        },
        digests: order.logs,
    };

    const response = await pinata.upload.public.json(json);

    return response.cid;
};
