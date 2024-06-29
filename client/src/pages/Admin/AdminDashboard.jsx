import React, { useEffect, useState } from 'react'
import { Card, Metric, Text } from '@tremor/react';
import { BsDropletFill } from "react-icons/bs";
import axios from 'axios';
import AdminBloodDonations from './AdminBloodDonations';

const AdminDashboard = () => {
    const [bloodCount, setBloodCount] = useState({
        'O+' : 0,
        'O-' : 0,
        'A+' : 0,
        'A-' : 0,
        'B+' : 0,
        'B-' : 0,
        'AB+' : 0,
        'AB-' : 0
    });

    const loadCount = async () => {
        let response = await axios.get('api/bloodtype');
        if (response && response.status == 200) {
            response.data.forEach(x => {
                setBloodCount(prevBloodCount => ({
                    ...prevBloodCount,
                    [x.type]: x.units
                }));
            })
        }
    }

    useEffect(() => {
        loadCount();
    }, []);
    
    return (
        <>
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

                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
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

                        <div>
                        {bloodCount['AB-']}
                        </div>
                    </div>


                </Card>

            </div>
        </div>
        <AdminBloodDonations />
        </>
    )
}

export default AdminDashboard