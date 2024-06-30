// src/components/BloodRequestRow.js
import React from 'react';
import axios from 'axios';
const AdminBloodRequestRow = ({ request, refreshRequests, loadCount }) => {
  const fulfillRequest = async (id) => {
    try {
      let response = await axios.patch(`/api/donations/${id}/donate`);
      if (response.status === 200) {
        alert('Blood request fulfiled successfully.');
        refreshRequests();
        loadCount();
      } else {
        alert(response?.data?.message ?? 'Failed to fulfill the request.');
      }
    } catch (error) {
      console.error('Delete error', error);
      alert('Failed to fulfill blood request.');
    }
  };

  return (
    <tr className="border-b md:table-row block mb-2 md:mb-0">
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Name"><p className='md:hidden font-bold'>Name:</p> {request.name}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Email"><p className='md:hidden font-bold'>Email:</p>{request.email}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Phone"><p className='md:hidden font-bold'>Phone:</p>{request.phone}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Blood Type"><p className='md:hidden font-bold'>Blood Group:</p>{request.bloodtype}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Units"><p className='md:hidden font-bold'>Units:</p>{request.units}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Message"><p className='md:hidden font-bold'>Message:</p>{request.message}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Status"><p className='md:hidden font-bold'>Status:</p>{request.status}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Action">
        {
            request.status === "Pending" && <button className="bg-green-500 text-white py-1 px-3 rounded mr-1" onClick={() => {fulfillRequest(request.id)}}>Fulfill Request</button>
        }
      </td>
    </tr>
  );
};

export default AdminBloodRequestRow;
