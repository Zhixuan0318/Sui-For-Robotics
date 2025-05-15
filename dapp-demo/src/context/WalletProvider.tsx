'use client';

import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { networks } from '@/utils/constants';

import '@mysten/dapp-kit/dist/index.css';

const queryClient = new QueryClient();

function SuiProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider
                networks={networks}
                defaultNetwork={process.env.NEXT_PUBLIC_NETWORK as any}
            >
                <WalletProvider autoConnect>{children}</WalletProvider>
            </SuiClientProvider>
        </QueryClientProvider>
    );
}

export default SuiProvider;
