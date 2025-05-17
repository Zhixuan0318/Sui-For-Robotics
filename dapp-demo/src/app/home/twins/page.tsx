'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useCallback, useEffect } from 'react';
import useTwinsRobots from '@/hooks/use-twins-robots';

import { addresses } from '@/utils/constants';

import { cn } from '@/lib/utils';

export default function Twins() {
    const { robots, fetchRobots } = useTwinsRobots();

    useEffect(() => {
        const interval = setInterval(() => fetchRobots(), 5_000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <section className='grid grid-cols-3 gap-x-14 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2'>
                <div>
                    {robots
                        .filter((robot) => robot.type == 'Picking')
                        .map((robot, index) => (
                            <Robot key={index} robot={robot} />
                        ))}
                </div>
                <div>
                    {robots
                        .filter((robot) => robot.type == 'Packing')
                        .map((robot, index) => (
                            <Robot key={index} robot={robot} />
                        ))}
                </div>
                <div>
                    {robots
                        .filter((robot) => robot.type == 'Delivery')
                        .map((robot, index) => (
                            <Robot key={index} robot={robot} />
                        ))}
                </div>
            </section>
        </main>
    );
}

function Robot({ robot }: { robot: TwinsRobot }) {
    const getLink = useCallback(() => {
        const robotId = robot.id.toString();
        switch (robot.type) {
            case 'Picking':
                return (addresses.kiosks.pickingRobots as any)[robotId];
            case 'Packing':
                return (addresses.kiosks.packingRobots as any)[robotId];
            case 'Delivery':
                return (addresses.kiosks.deliveringRobots as any)[robotId];
        }
    }, [robot]);

    return (
        <Link
            href={`${process.env.NEXT_PUBLIC_EXPLORER}/object/${getLink()}`}
            target='_blank'
            className='p-4 flex gap-x-3 border border-secondary rounded-lg'
        >
            <Image src={'/images/icons/robot.svg'} alt='robot' width={40} height={46} />
            <section className='flex flex-col gap-y-2'>
                <h4>{`${robot.type} Robot #${robot.id}`}</h4>
                <div
                    className={cn(
                        'w-fit text-xs',
                        robot.isActive ? 'green-background' : 'red-background'
                    )}
                >
                    {robot.isActive ? 'Active' : 'Busy'}
                </div>
            </section>
        </Link>
    );
}
