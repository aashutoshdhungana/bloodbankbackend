import React, { useState } from 'react'
import { Card, Metric, Text } from '@tremor/react';
import { BsDropletFill } from "react-icons/bs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Select from '@mui/material/Select';

const BloodStock = () => {

  const [bloodGroup, setBloodGroup] = useState('');

  const handleChange = (event) => {
    setBloodGroup(event.target.value);
  };

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
      <div className=' flex flex-col items-center gap-5 mt-10'>
        <p className='text-2xl font-bold text-gray-500'>Update Blood Unit</p>
        <FormControl className='w-56'>
          <InputLabel className='' id="blood-group-select-label">Choose Blood Group</InputLabel>
          <Select
            labelId="blood-group-select-label"
            id="blood-group-select"
            value={bloodGroup}
            label="Blood Group"
            onChange={handleChange}
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Unit" variant="outlined" />
        <Button variant="contained">Update</Button>

      </div>
    </div>

  )
}

export default BloodStock