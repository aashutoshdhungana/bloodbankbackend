import React from 'react'
import { Card, Metric, Text } from '@tremor/react';
import { BsDropletFill } from "react-icons/bs";

const Dashboard = () => {
    return (
        <div className='flex flex-col '>
            <div className='p-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">A+</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">B+</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">O+</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">AB+</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">A-</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card> <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">B-</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">O-</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>
                <Card
                    className="mx-auto max-w-xs"
                    decoration="top"
                    decorationColor="indigo"

                >
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <BsDropletFill color='red' size={30} />
                            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">AB-</p>

                        </div>

                        <div>
                            0
                        </div>
                    </div>


                </Card>

            </div>
            <div className='h-[1px] bg-gray-500 w-64 ' />
        </div>

    )
}

export default Dashboard