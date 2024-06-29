// src/App.js
import React from 'react';

const data = [
  { donorName: 'First Donor', disease: 'None', age: 29, bloodGroup: 'A+', unit: 2, requestDate: '2024-06-01', status: 'Pending', mobile: '9812345678' },
  { donorName: 'Second Donor', disease: 'Diabetes', age: 32, bloodGroup: 'B-', unit: 1, requestDate: '2024-06-10', status: 'Completed', mobile: '9812345678' },
];

const TableRow = ({ person }) => (
  <tr className="border-b md:table-row block mb-2 md:mb-0">
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Donor Name">
      <p className='md:hidden font-semibold'>Donor Name:</p> {person.donorName}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Disease">
      <p className='md:hidden font-semibold'>Disease:</p> {person.disease}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Age">
      <p className='md:hidden font-semibold'>Age:</p> {person.age}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Blood Group">
      <p className='md:hidden font-semibold'>Blood Group:</p> {person.bloodGroup}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Unit">
      <p className='md:hidden font-semibold'>Unit:</p> {person.unit}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Request Date">
      <p className='md:hidden font-semibold'>Request Date:</p> {person.requestDate}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Status">
      <p className='md:hidden font-semibold'>Status:</p> {person.status}
    </td>
    <td className="p-4 md:table-cell flex gap-2 space-x-2 relative md:static">
      <button className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
      <button className="bg-green-500 text-white py-1 px-3 rounded">Approve</button>

    </td>
  </tr>
);

const Donations = () => (
  <div className="App p-4">
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse md:table block">
        <thead className="md:table-header-group hidden">
          <tr className="md:table-row block">
            <th className="p-4 bg-gray-200 md:table-cell block">Donor Name</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Disease</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Age</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Blood Group</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Unit</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Request Date</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Status</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Action</th>
          </tr>
        </thead>
        <tbody className="md:table-row-group block">
          {data.map((person, index) => (
            <TableRow key={index} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Donations;
