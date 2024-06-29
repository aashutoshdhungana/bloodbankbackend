// src/App.js
import React from 'react';

const data = [
  { patientName: 'Aadarsha Karki', age: 45, reason: 'Surgery', bloodGroup: 'O+', unit: 3, date: '2024-06-01', status: 'Pending' },
  { patientName: 'Ramesh Rawat', age: 32, reason: 'Accident', bloodGroup: 'A-', unit: 2, date: '2024-06-10', status: 'Completed' },
];

const TableRow = ({ request }) => (
  <tr className="border-b md:table-row block mb-2 md:mb-0">
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Patient Name">
      <p className='md:hidden font-semibold'>Patient Name:</p> {request.patientName}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Age">
      <p className='md:hidden font-semibold'>Age:</p> {request.age}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Reason">
      <p className='md:hidden font-semibold'>Reason:</p> {request.reason}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Blood Group">
      <p className='md:hidden font-semibold'>Blood Group:</p> {request.bloodGroup}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Unit">
      <p className='md:hidden font-semibold'>Unit:</p> {request.unit}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Date">
      <p className='md:hidden font-semibold'>Date:</p> {request.date}
    </td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Status">
      <p className='md:hidden font-semibold'>Status:</p> {request.status}
    </td>
    <td className="p-4 md:table-cell flex gap-2 space-x-2 relative md:static">
      <button className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
      <button className="bg-green-500 text-white py-1 px-3 rounded">Approve</button>

    </td>
  </tr>
);

const BloodRequest = () => (
  <div className="App p-4">
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse md:table block">
        <thead className="md:table-header-group hidden">
          <tr className="md:table-row block">
            <th className="p-4 bg-gray-200 md:table-cell block">Patient Name</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Age</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Reason</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Blood Group</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Unit</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Date</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Status</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Action</th>
          </tr>
        </thead>
        <tbody className="md:table-row-group block">
          {data.map((request, index) => (
            <TableRow key={index} request={request} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default BloodRequest;
