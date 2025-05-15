'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CopyButton } from '@lobehub/ui';

import { digestNames } from '@/utils/constants';

import { formatLog, sliceDigest } from '@/utils/formatter';
import { cn } from '@/lib/utils';

interface Props {
    order: Order;
    className?: string;
}

export default function Logs({ order, className }: Props) {
    return (
        <section className={cn('detail-log', className)}>
            <section className='mb-4 flex items-center gap-x-2.5'>
                <h4>Detail Log</h4>
                <figure className='order-note'>
                    <Image
                        src={'/images/icons/important.svg'}
                        alt='important'
                        height={8}
                        width={8}
                    />
                    <h6>Click to view on Sui Scan</h6>
                </figure>
            </section>
            <section className='flex flex-col gap-y-1.5 h-[400px] overflow-y-scroll'>
                {order.logs.map((digest, index) => (
                    <figure
                        key={index}
                        className='relative p-3.5 flex items-center justify-between border border-secondary rounded-lg'
                    >
                        <section className='flex flex-col gap-y-3'>
                            <div className='flex items-center gap-x-2 flex-wrap'>
                                {formatLog(order, digestNames[index])}
                            </div>
                            <section className='flex gap-x-1 [&>*]:flex [&>*]:items-center [&>*]:text-xs [&>*]:text-secondary [&>*]:gap-x-1 [&_a]:underline'>
                                <Image src={'/images/sui.svg'} alt='sui' width={16} height={16} />
                                {digest.length > 1 ? (
                                    <>
                                        <h5>Digest: {sliceDigest(digest)}</h5>
                                        <CopyButton content={digest} />
                                        <Link
                                            className='absolute right-4 top-1/2 -translate-y-1/2'
                                            href={`${process.env.NEXT_PUBLIC_EXPLORER}/tx/${digest}`}
                                            target='_blank'
                                        >
                                            <Image
                                                src={'/images/icons/redirect-button.svg'}
                                                alt='link'
                                                width={24}
                                                height={40}
                                            />
                                        </Link>
                                    </>
                                ) : (
                                    <h5>Executing...</h5>
                                )}
                            </section>
                        </section>
                    </figure>
                ))}
            </section>
        </section>
    );
}
