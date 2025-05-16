import type { Metadata } from 'next';
import localFont from 'next/font/local';

import WalletProvider from '@/context/WalletProvider';

import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';

const styreneA = localFont({
    src: [
        { path: '../../public/fonts/StyreneA-Regular.ttf', weight: '400' },
        { path: '../../public/fonts/StyreneA-Medium.ttf', weight: '500' },
        { path: '../../public/fonts/StyreneA-Bold.ttf', weight: '700' },
    ],
});

export const metadata: Metadata = {
    title: 'Hyper Agile',
    description: 'Hyper Agile',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <WalletProvider>
                <body className={`${styreneA.className} antialiased`}>{children}</body>
            </WalletProvider>
        </html>
    );
}
