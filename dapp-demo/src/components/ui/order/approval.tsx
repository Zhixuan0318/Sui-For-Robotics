'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CopyButton } from '@lobehub/ui';

import { sliceDigest } from '@/utils/formatter';
import { cn } from '@/lib/utils';

interface Props {
    approvals: ApprovalReceipt[];
    className?: string;
}

export default function Approval({ approvals, className }: Props) {
    return (
        <section className={className}>
            <section className='mb-4 flex items-center gap-x-2.5'>
                <h4>Human Operator Approval</h4>
                <figure className='order-note'>
                    <Image src={'/images/icons/power.svg'} alt='power' height={8} width={8} />
                    <h6>Mutli-Signatures</h6>
                </figure>
            </section>
            <section className='grid grid-cols-3 gap-x-3'>
                {approvals.map(({ digest, address }, index) => (
                    <figure
                        key={index}
                        className='relative p-4 flex items-center justify-between border border-secondary rounded-lg'
                    >
                        <section>
                            <div className='flex items-center gap-x-3.5'>
                                <Image
                                    src={'/images/icons/success.svg'}
                                    alt='success'
                                    width={32}
                                    height={32}
                                    className={cn(digest.length > 1 ? 'opacity-100' : 'opacity-30')}
                                />
                                <div className='flex flex-col gap-y-1.5'>
                                    <h5 className='text-sm'>
                                        {index == 0
                                            ? 'Picking'
                                            : index == 1
                                            ? 'Packing'
                                            : 'Delivery'}{' '}
                                        Task
                                    </h5>
                                    <h6 className='flex items-center gap-x-2 text-sm text-secondary'>
                                        Approved by{' '}
                                        {address ? (
                                            sliceDigest(address)
                                        ) : (
                                            <div className='spinner' />
                                        )}
                                    </h6>
                                </div>
                            </div>
                            <div className='mt-2 flex items-center gap-x-2 text-xs font-light text-secondary'>
                                {digest.length > 1 ? (
                                    <>
                                        <h5>Digest: {sliceDigest(digest)}</h5>
                                        <CopyButton content={digest} />
                                    </>
                                ) : (
                                    <h5>Executing...</h5>
                                )}
                            </div>
                        </section>
                        <Link
                            className='absolute right-4'
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
                    </figure>
                ))}
            </section>
        </section>
    );
}
