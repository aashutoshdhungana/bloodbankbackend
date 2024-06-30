import React, { useEffect, useState } from 'react'
import { Card, Metric, Text } from '@tremor/react';
import { BsDropletFill } from "react-icons/bs";
import axios from 'axios';

const AdminCount = ({bloodCount}) => {
    return (
            <div className='flex flex-col pt-[6rem]'>
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

                        <div data-testid="apcount" id="apcount">
                            {bloodCount['A+']}
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

                        <div data-testid="bpcount">
                        {bloodCount['B+']}
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

                        <div data-testid="opcount">
                        {bloodCount['O+']}
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

                        <div data-testid="abcount">
                        {bloodCount['AB+']}
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

                        <div data-testid="ancount">
                        {bloodCount['A-']}
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

                        <div data-testid="bncount">
                        {bloodCount['B-']}
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

                        <div data-testid="oncount">
                        {bloodCount['O-']}
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

                        <div data-testid="abncount">
                        {bloodCount['AB-']}
                        </div>
                    </div>


                </Card>

            </div>
        </div>
    );
}

export default AdminCount;