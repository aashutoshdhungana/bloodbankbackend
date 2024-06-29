import React from 'react'
import { Card } from '@tremor/react';
import { FaRepeat } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { ImCross } from "react-icons/im";

const PatientHome = () => {
    return (
        <div className='mt-20  grid grid-cols-2 md:grid-cols-4 gap-4  px-4 '>
            <Card
                className="mx-auto max-w-xs flex justify-between"
                decoration="top"
                decorationColor="indigo"
            >
                <div>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Request Made</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">3</p>
                </div>
                
                <FaRepeat size={30} />
            </Card>
            <Card
                className="mx-auto max-w-xs flex justify-between"
                decoration="top"
                decorationColor="yellow"
            >
                <div>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Pending Request</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">3</p>
                </div>
                
                <FaRepeat size={30} />
            </Card>
            <Card
                className="mx-auto max-w-xs flex justify-between"
                decoration="top"
                decorationColor="green"
            >
                <div>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Approved Request</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">3</p>
                </div>
                
                <MdVerified size={30} />
            </Card>
            <Card
                className="mx-auto max-w-xs flex justify-between"
                decoration="top"
                decorationColor="red"
            >
                <div>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Rejected Request</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">3</p>
                </div>

                <ImCross size={20} />

           
                
            </Card>

        </div>
    )
}

export default PatientHome