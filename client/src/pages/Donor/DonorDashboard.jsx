// src/App.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
const mapStatus = (id) => {
    switch (id)
    {
        case "0" : return "Pending"
        case "1" : return "Approved"
        case "2" : return "Rejected"        
    }
}
const TableRow = ({ person, getDonations }) => {
    const deleteDonation = async (id) => {
        let response = await axios.delete('api/blooddonation/' + id);
        if (response && response.status === 200) {
            alert('Blood donation deleted successfully.')
            getDonations();
        }
        else {
            alert('Failed to delete blood donation.');
        }
    }

    return (
        <tr className="border-b md:table-row block mb-2 md:mb-0">
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Donor Name"
            >
             <p className='md:hidden font-bold'>Name:</p>   {person.name}
            </td>
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Disease"
            >
              <p className='md:hidden font-bold'>Blood Group:</p>  {person.bloodGroup}
            </td>
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Age"
            >
             <p className='md:hidden font-bold'>Pints:</p>   {person.pints}
            </td>
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Blood Group"
            >
              <p className='md:hidden font-bold'>Status:</p>  {person.status}
            </td>
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Request Date"
            >
              <p className='md:hidden font-bold'>Donation Day:</p>  {person.donationDay}
            </td>
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Status"
            >
             <p className='md:hidden font-bold'>Location:</p>   {person.location}
            </td>
            <td className="p-4 md:table-cell flex gap-2 space-x-2 relative md:static">
                <button className="bg-red-500 text-white py-1 px-3 rounded" onClick={() => {deleteDonation(person.id)}}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

const DonorDashboard = () => {
    const [donations, setDonations] = useState([]);
    const { isLoggedIn } = useSelector(state => state.user);
    const navigate = useNavigate();
    
    const getDonations = async () => {
        var result = await axios.get("/api/blooddonation");
        if (result && result.status == 200) {
            setDonations(
                result.data.map((x) => {
                    return {
                        id: x.id,
                        name: x.user?.name,
                        bloodGroup: x.blood_type?.type,
                        pints: x.units,
                        status: mapStatus(x.status),
                        donationDay: x.date,
                        location: x.location
                    };
                })
            );
        }
    };
    useEffect(() => {
        getDonations();
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [navigate, isLoggedIn])
    
    return (
        <div className="p-4 pt-[6rem]">
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse md:table block">
                    <thead className="md:table-header-group hidden">
                        <tr className="md:table-row block">
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Donor Name
                            </th>
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Blood Group
                            </th>
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Pints
                            </th>
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Status
                            </th>
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Donation Day
                            </th>
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Donation Location
                            </th>
                            <th className="p-4 bg-gray-200 md:table-cell block">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="md:table-row-group block">
                        {
                            donations.map((person, index) => (
                                <TableRow key={index} person={person} getDonations={getDonations}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonorDashboard;
