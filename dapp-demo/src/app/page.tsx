'use client';

import Image from 'next/image';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useConnectWallet, useCurrentWallet, useWallets } from '@mysten/dapp-kit';

export default function Connection() {
    const router = useRouter();

    const wallets = useWallets();
    const { isConnected } = useCurrentWallet();
    const { mutate: connect } = useConnectWallet();

    useEffect(() => {
        if (isConnected) router.push('/home/store');
    }, [isConnected]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <main className='w-3/4 h-dvh flex flex-col items-center justify-center gap-y-10'>
                <Image src={'/images/logo.svg'} alt='logo' width={120} height={100} />
                <h1 className='text-6xl font-bold'>
                    The Ecommerce Warehouse <br /> Automation Run By Robots.{' '}
                </h1>
                <section className='flex flex-wrap items-center gap-x-3 gap-y-6'>
                    <h3 className='p-6 flex items-center gap-x-3 border border-tetriary rounded-full'>
                        <Image src={'/images/sui.svg'} alt='sui' width={40} height={38} />
                        Deployed on SUI Testnet
                    </h3>
                    <h3 className='p-6 flex items-center gap-x-3 border border-tetriary rounded-full'>
                        <Image
                            src={'/images/icons/energy.svg'}
                            alt='energy'
                            width={40}
                            height={38}
                        />
                        A showcase run by Agility Lab
                    </h3>
                </section>
                <button
                    className='w-fit py-3.5 px-28 flex items-center text-background text-lg font-bold bg-[#3C96FF] rounded-full cursor-pointer'
                    onClick={() => {
                        const wallet = wallets.find((wallet) => wallet.name == 'Slush');
                        if (wallet)
                            connect({
                                wallet,
                            });
                        else router.push('https://slush.app');
                    }}
                >
                    <Image src={'/images/slush.svg'} alt='slush' width={46} height={46} />
                    Connect now with Slush
                </button>
            </main>
        </div>
    );
}
