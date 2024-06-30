// src/pages/BloodRequests.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BloodRequestRow from './BloodRequestRow';

const MyBloodRequests = () => {
  const [requests, setRequests] = useState([]);
  const { isLoggedIn } = useSelector(state => state.user);
  const navigate = useNavigate();

  const getRequests = async () => {
    try {
      const result = await axios.get('/api/bloodrequest');
      if (result.status === 200) {
        console.log(result.data)
        let mappedData = result.data.map((x) => {
            return {
                id: x.id,
                name: x.user.name,
                email: x.user.email,
                phone: x.phone,
                bloodtype: x.blood_type?.type,
                units: x.units,
                message: x.message
            }
        })
        setRequests([...mappedData]);
      }
    } catch (error) {
      console.error('Fetch error', error);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login-page');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="p-4 pt-[6rem]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse md:table block">
          <thead className="md:table-header-group hidden">
            <tr className="md:table-row block">
              <th className="p-4 bg-gray-200 md:table-cell block">Name</th>
              <th className="p-4 bg-gray-200 md:table-cell block">Email</th>
              <th className="p-4 bg-gray-200 md:table-cell block">Phone</th>
              <th className="p-4 bg-gray-200 md:table-cell block">Blood Type</th>
              <th className="p-4 bg-gray-200 md:table-cell block">Units</th>
              <th className="p-4 bg-gray-200 md:table-cell block">Message</th>
              <th className="p-4 bg-gray-200 md:table-cell block">Action</th>
            </tr>
          </thead>
          <tbody className="md:table-row-group block">
            {requests.map((request, index) => (
              <BloodRequestRow key={index} request={request} refreshRequests={getRequests} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBloodRequests;
