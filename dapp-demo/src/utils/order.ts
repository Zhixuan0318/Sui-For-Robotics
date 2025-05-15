import { createHash } from 'crypto';

export const generateOrderId = (address: string): string => {
    const hash = createHash('sha256')
        .update(address + Date.now())
        .digest('hex');
    return hash.slice(2, 8);
};

export const createOrder = (
    orderId: string,
    productId: number,
    name: string,
    phone: string,
    address: string,
    wallet: string,
    digest: string
): Order => {
    const newOrder: Order = {
        id: orderId,
        status: 'processing',

        productId,

        mailingInfo: {
            name,
            phone,
            address,
        },
        wallet,

        logs: [digest, '0'],
        approvals: [{ digest: '0' }, { digest: '0' }, { digest: '0' }],
        robots: [{ id: -1 }, { id: -1 }, { id: -1 }],

        timestamp: Date.now(),
    };

    return newOrder;
};
