'use client';

import Image from 'next/image';

import { useCurrentAccount, useCurrentWallet, useDisconnectWallet } from '@mysten/dapp-kit';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBar({ children }: { children?: React.ReactNode }) {
    const router = useRouter();

    const account = useCurrentAccount();
    const { isDisconnected } = useCurrentWallet();
    const { mutate: disconnect } = useDisconnectWallet();

    useEffect(() => {
        if (isDisconnected) router.push('/');
    }, [isDisconnected]);

    return (
        <nav className='px-14 py-16 flex items-center justify-between'>
            <section className='flex items-center gap-x-4'>
                <Image src={'/images/logo.svg'} alt='logo' width={66} height={54} />
                {children}
            </section>
            <div className='px-3 py-2.5 flex gap-x-3 border border-secondary rounded-lg'>
                <Image src={'/images/sui.svg'} alt='sui' width={32} height={32} />
                <div>
                    <h4>{account ? `0x...${account.address.slice(38, 42)}` : 'Loading...'}</h4>
                    <h6 className='cursor-pointer' onClick={() => disconnect()}>
                        Disconnect Wallet
                    </h6>
                </div>
            </div>
        </nav>
    );
}
