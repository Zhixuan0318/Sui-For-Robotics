import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';

export const networks = {
    devnet: { url: getFullnodeUrl('devnet') },
    testnet: { url: getFullnodeUrl('testnet') },
};

export const activeNetwork = (process.env.NEXT_PUBLIC_NETWORK as 'devnet' | 'testnet') ?? 'devnet';

export const client = new SuiClient({
    url: networks[activeNetwork].url,
});

export const digestNames = [
    'Warehouse received order',
    'Picking in progress',
    'PRODUCT from PRODUCT_COLOR Shelf to Picking Robot ROBOT_ID',
    'PRODUCT from Picking Robot ROBOT_ID to Order Buffer Zone',
    'Packing in progress',
    'PRODUCT from Order Buffer Zone to Packing Robot ROBOT_ID',
    'PRODUCT from Packing Robot ROBOT_ID to Packout Zone',
    'Delivery in progress',
    'PRODUCT from Packout Zone to Delivery Robot ROBOT_ID',
    'PRODUCT from Delivery Robot ROBOT_ID to Delivery Zone',
    'Shipped. PRODUCT from Delivery Zone to WALLET',
];

export const addresses = {
    owner: '0xc00df357f6974e090081c9bf9d65ca95fd4a2bb70ed3f1fe2682e7b63c6be203',
    package: '0x0868c525a5d8a11cc8b3187a55497b9f2d8af3fe407b2ffd7179a085722b61c6',
    storage: '0x4e851aab9ec55c350ad08bf831f487b2e4854b9169a866336202e0cbcd4a1ce4',
    random: '0x8',
    products: [
        '0xaa4d2d79dea534d0f1100a85486b71e8c841dd4c116105f07089ad9ad86e14d8',
        '0xdbd7221c41165dbadcc33a64bdc7da681f6c25f9ec123647c70a18d8a4870182',
        '0x12792423a02f4d3c3461b078beba80beabd24a95183661c93065bead34f75d52',
    ],
    kiosks: {
        shelfs: {
            green: '0x175256da8395caf6d4cc4e9138f1c5e4f68e01ac2b8bda0b324ddd4da20441d0',
            purple: '0xdd7fe910678bb19512b64181b5730d00311c35e692361c4819e13f1c65992101',
            blue: '0x7618b0ca681e265dd474f83aed995654b774d8c2a09f8d8d87d757b82ce767c3',
        },
        pickingRobots: [
            '0xb178d6106fbaf372caac29883e37a222ddd89b5352830eaadac274a428fe832b',
            '0x64a6ece22ae2171a4dc8eb078ca8531632008b69b0d1e972c55150989661d2a0',
            '0x87dfe5b8e5c0c9ef87d20e23b4233775c969c4208e525d0e1598287b40b16509',
            '0xf96c60878a3c4a6d1f55eae5d621699f991bf47168fc948e96e3eaa36372454a',
            '0xa03af9d95a7b26be0ae9c4a0cd250afda64a7d0ecf359441f960e8a827ff0354',
        ],
        packingRobots: [
            '0xe1669d9034b0ab4ab719bf356aa716e40db6e343680495c07beb160bfb58cb90',
            '0x3f4cb62a22abcb464cab9321e10fe09b0d3336ed0a6027949f69cde14a7e1e99',
            '0xbe6246d2e5eb7c9615cad1b34c24d68c356dc6934be2e006372d2b3aec047fb9',
            '0xd8a45e4621f87dc8bc3ae21d20faadf15159cc0da5d7fc410267c2f6a4858b81',
            '0x114ef82150605c64eac8d6b7a04ce8e3bbc28d8a185ee80eeb1a86f098cfdffe',
        ],
        deliveringRobots: [
            '0xb44cd878de11eec0c93802f2bb1d7eefc731a1c6dab684288a80ab12d4c97075',
            '0x429c17f1f0d80acf8b708ddb56f26f3b774e79f4884cdfee50633d5c0aec4326',
            '0xc574ee85e9f2a980244f838d8d6c862039d67ec3509609e3f53cb45d56c592c5',
            '0xf0d1ba6cc8e44589d3d2696002a7a89d7f7adc22ef8be74572dfd0e446e22264',
            '0x7e7fe696e573cbe72c33cace10eae12efc2ea1f6d8cbd01774267a1c6fb1c583',
        ],
        zones: {
            buffer: '0x4fccafaf4de7bb4b434f42cc2e330e7f1dae2f62b4200959310da7cb94b64a0b',
            packing: '0x82d4a447195833edeb6d9a3abb3f5bc23dcaea1cdf9bc3da06638f08aa61c266',
            delivery: '0xbcd1172c54fe9307cbb225ac6b23595889475e5382375fca4a87841ddb33b5b2',
        },
    },
};

export const kioskCaps: { [key: string]: string } = {
    '0x175256da8395caf6d4cc4e9138f1c5e4f68e01ac2b8bda0b324ddd4da20441d0':
        '0xf1e43fe73a7a82bb463cf69173d5e01b79ef51b2ff1a566f939a12a9415e572d',
    '0xdd7fe910678bb19512b64181b5730d00311c35e692361c4819e13f1c65992101':
        '0x2079aa851527b9fcd05f38755632f01c6116438eefd1b2a7d1b2df1c00d92470',
    '0x7618b0ca681e265dd474f83aed995654b774d8c2a09f8d8d87d757b82ce767c3':
        '0xd8f8e7cb8e3db06ee481709c12292756be0f0b8e9658b4d0084cb74f9e4cbe2c',
    '0xb178d6106fbaf372caac29883e37a222ddd89b5352830eaadac274a428fe832b':
        '0x302c88b9a663637958cecc54939886ef40de8915e6717880bddbe5c8e3f08272',
    '0x64a6ece22ae2171a4dc8eb078ca8531632008b69b0d1e972c55150989661d2a0':
        '0x30419bc79d831229c31272957bff05daedb681a3ec50ac10f97cc5af2c4af30a',
    '0x87dfe5b8e5c0c9ef87d20e23b4233775c969c4208e525d0e1598287b40b16509':
        '0x3d0d601e783772e87aaa3e7c0540d4ed68c25b2a3c1ee825ec08d6dbff9e7211',
    '0xf96c60878a3c4a6d1f55eae5d621699f991bf47168fc948e96e3eaa36372454a':
        '0x40fe5d2415b7abb4a80a24adad1ca072e0837ebd892b4fb15c81b03ee0fb3026',
    '0xa03af9d95a7b26be0ae9c4a0cd250afda64a7d0ecf359441f960e8a827ff0354':
        '0x5bbaab9e9860f55c404b5aa7b494d7ca1474ce460118325fc5c09ca7ba681fd9',
    '0xe1669d9034b0ab4ab719bf356aa716e40db6e343680495c07beb160bfb58cb90':
        '0x5c1372dfaff7cb50a1be480e0671254d5183d3702b20d3fb8ce9ec5fce0031d4',
    '0x3f4cb62a22abcb464cab9321e10fe09b0d3336ed0a6027949f69cde14a7e1e99':
        '0x62be84a282156bebeb89622aac5d3dde9025bb9a744b742d0a9f999c72e6b605',
    '0xbe6246d2e5eb7c9615cad1b34c24d68c356dc6934be2e006372d2b3aec047fb9':
        '0x74abdeef4cccbc9bad081ba52bbc9d7599df0c972a16dc0b12553a15db7e4782',
    '0xd8a45e4621f87dc8bc3ae21d20faadf15159cc0da5d7fc410267c2f6a4858b81':
        '0x7fc553c63c7e4a6a624a0a90a4bd97cf02183d075016dec8d637782bcb221ee4',
    '0x114ef82150605c64eac8d6b7a04ce8e3bbc28d8a185ee80eeb1a86f098cfdffe':
        '0x916f83c919681c569352d3534071fa1fc7d23e80ff43b98c203a47c1b4d8efbe',
    '0xb44cd878de11eec0c93802f2bb1d7eefc731a1c6dab684288a80ab12d4c97075':
        '0x92b22d36717735df44dce70d1a1ea29dc7057c1cbab10c3e711154479a412ba3',
    '0x429c17f1f0d80acf8b708ddb56f26f3b774e79f4884cdfee50633d5c0aec4326':
        '0x9d44441edb8aeeaf662e3e766dea47cbfcf4073f9f28e954e7a1b66145fe5a29',
    '0xc574ee85e9f2a980244f838d8d6c862039d67ec3509609e3f53cb45d56c592c5':
        '0xa42a4397c983bf9e963be93d8ce7c5a9a0c48db399547c05f1c795198f56b6b1',
    '0xf0d1ba6cc8e44589d3d2696002a7a89d7f7adc22ef8be74572dfd0e446e22264':
        '0xbffbe2d29e049fa8a4af50ea97ed13f6107fc2d8c4a6679d2e914d3df4c5e475',
    '0x7e7fe696e573cbe72c33cace10eae12efc2ea1f6d8cbd01774267a1c6fb1c583':
        '0xc1213a0d4b8dd5d5a6a4298a0f7849b23a66ebf3e0a3110d3a99a0176b717878',
    '0x4fccafaf4de7bb4b434f42cc2e330e7f1dae2f62b4200959310da7cb94b64a0b':
        '0xd74415625295aa6e73e1b2196c4d252f33cf2e1f1d36fd31ac0878598293ac73',
    '0x82d4a447195833edeb6d9a3abb3f5bc23dcaea1cdf9bc3da06638f08aa61c266':
        '0xeeae09db6e1b6b552b4881b47d5eacf0b43479b7ffa8ce2111ae1ebac5fe68bf',
    '0xbcd1172c54fe9307cbb225ac6b23595889475e5382375fca4a87841ddb33b5b2':
        '0xfe53b188ed14096661b2b0679f9e394c124e97a3b2a6989c2f8e9fa9c9d1c948',
};
