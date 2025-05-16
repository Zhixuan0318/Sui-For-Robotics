import { Transaction } from '@mysten/sui/transactions';

import { addresses, client } from '@/utils/constants';

export function placeOrder(orderId: string, productId: number): Transaction {
    const tx = new Transaction();
    tx.moveCall({
        package: addresses.package,
        module: 'warehouse',
        function: 'place_order',
        arguments: [tx.object(addresses.storage), tx.pure.string(orderId), tx.pure.u8(productId)],
    });
    return tx;
}

export async function getProducts(): Promise<Product[]> {
    const products: Product[] = [];

    for (let i = 0; i < addresses.products.length; i++) {
        const object = await client.getObject({
            id: addresses.products[i],
            options: { showContent: true },
        });

        products.push({ id: i, stock: (object.data?.content as any).fields.balance });
    }

    return products;
}
