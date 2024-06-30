// src/components/BloodRequestRow.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BloodRequestRow = ({ request, refreshRequests }) => {
    const navigate = useNavigate();
  const deleteRequest = async (id) => {
    try {
      let response = await axios.delete(`/api/bloodrequest/${id}`);
      if (response.status === 200) {
        alert('Blood request deleted successfully.');
        refreshRequests();
      } else {
        alert('Failed to delete blood request.');
      }
    } catch (error) {
      console.error('Delete error', error);
      alert('Failed to delete blood request.');
    }
  };

  return (
    <tr className="border-b md:table-row block mb-2 md:mb-0">
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Name"><p className='md:hidden font-bold'>Name:</p>{request.name}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Email"><p className='md:hidden font-bold'>Email:</p>{request.email}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Phone"><p className='md:hidden font-bold'>Phone:</p>{request.phone}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Blood Type"><p className='md:hidden font-bold'>Blood Type:</p>{request.bloodtype}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Units"><p className='md:hidden font-bold'>Units:</p>{request.units}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Message"><p className='md:hidden font-bold'>Message:</p>{request.message}</td>
      <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Action">
        <button className="bg-green-500 text-white py-1 px-3 rounded mr-1" onClick={() => {navigate(`/requestBlood/edit/${request.id}`)}}>Edit</button>
        <button className="bg-red-500 text-white py-1 px-3 rounded" onClick={() => deleteRequest(request.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default BloodRequestRow;
