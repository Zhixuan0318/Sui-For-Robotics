import Image from 'next/image';

export function sliceDigest(digest: string, digits?: number): string {
    return `${digest.slice(0, digits ?? 5)}...${digest.slice(digest.length - (digits ?? 5))}`;
}

export function productIdToColor(productId: number, firstUpper?: boolean): string {
    const color = productId == 0 ? 'Green' : productId == 1 ? 'Purple' : 'Blue';
    if (!firstUpper) return color.toLowerCase();
    return color;
}

export function formatLog(order: Order, logName: string): any {
    const robotId = logName.includes('Picking')
        ? order.robots[0].id
        : logName.includes('Packing')
        ? order.robots[1].id
        : order.robots[2].id;

    const text = logName
        .replace('PRODUCT_COLOR', productIdToColor(order.productId, true))
        .replace('ROBOT_ID', robotId == undefined ? '' : robotId.toString())
        .replace('WALLET', sliceDigest(order.wallet, 4));

    const hasImage = text.includes('PRODUCT');

    if (!hasImage) return <h4>{text}</h4>;

    return (
        <>
            <Image
                src={`/images/product/${order.productId}.png`}
                alt='product'
                width={24}
                height={24}
            />{' '}
            <h4>{text.replace('PRODUCT', '')}</h4>
        </>
    );
}
