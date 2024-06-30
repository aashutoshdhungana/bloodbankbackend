// src/App.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import { useFormik } from "formik";
import * as Yup from "yup"
const mapStatus = (id) => {
    switch (id) {
        case "0":
            return "Pending";
        case "1":
            return "Approved";
        case "2":
            return "Rejected";
    }
};

const validationSchema = Yup.object({
    location: Yup.string().required('Location is required'),
    datetime: Yup.date().required('Datetime is required'),
});

const TableRow = ({ person, getDonations, setShowConfirm, setShowReject, setConfirmId }) => {
    const deleteDonation = async (id) => {
        let response = await axios.delete("api/blooddonation/" + id);
        if (response && response.status === 200) {
            alert("Blood donation deleted successfully.");
            getDonations();
        } else {
            alert("Failed to delete blood donation.");
        }
    };

    return (
        <tr className="border-b md:table-row block mb-2 md:mb-0">
            <td
                className="p-4 md:table-cell flex gap-2 relative md:static"
                data-label="Donor Name"
            >
              <p className='md:hidden font-bold'>Name:</p>  {person.name}
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
              <p className='md:hidden font-bold'>Pints:</p>  {person.pints}
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
              <p className='md:hidden font-bold'>Location:</p>  {person.location}
            </td>
            <td className="p-4 md:table-cell flex gap-2 space-x-2 relative md:static">
                {
                    person.status == "Pending" && (<>
                                        <button
                        className="bg-green-500 text-white py-1 px-3 rounded"
                        onClick={() => {
                            setShowConfirm(true);
                            setConfirmId(person.id);
                        }}
                    >
                        Approve
                    </button>
                    <button
                        className="bg-red-500 text-white py-1 px-3 rounded"
                        onClick={() => {
                            setShowReject(true)
                            setConfirmId(person.id)
                        }}
                    >
                        Reject
                    </button>
                    </>
)
                }
            </td>
        </tr>
    );
};

const AdminBloodDonations = ({ loadCount }) => {
    const [donations, setDonations] = useState([]);
    const { isLoggedIn } = useSelector((state) => state.user);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmId, setConfirmId] = useState(0);
    const [showReject, setShowReject] = useState(false);
    const navigate = useNavigate();

    const approveRequest = async (id, location, date) => {
        try
        {
            let response = await axios.patch(`api/donations/${id}/approve`, {
                location,
                date,
                status: "1"
            })
    
            if (response && response.status == 200) {
                alert('Successfully approved the donation.');
                loadCount();
                getDonations();
            }
            else {
                alert('Failed to approve the donation.')
            }
        }
        catch
        {
            alert('Failed to approve the donation.')
        }
    }

    const rejectRequest = async (id) => {
        try
        {
            let response = await axios.patch(`api/donations/${id}/approve`, {
                status: "2"
            })
    
            if (response && response.status == 200) {
                alert('Successfully rejected the donation.');
                loadCount();
                getDonations();
            }
            else {
                alert('Failed to reject the donation.')
            }
        }
        catch
        {
            alert('Failed to reject the donation.')
        }
    }
    const formik = useFormik({
        initialValues: {
            location: "",
            datetime: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("Form Values:", values);
            await approveRequest(confirmId, values.location, values.datetime);
            setShowConfirm(false);
            formik.resetForm();
        },
    });
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
                        location: x.location,
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
            navigate("/");
        }
    }, [navigate, isLoggedIn]);

    return (
        <>
            <div className="p-4">
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
                            {donations.map((person, index) => (
                                <TableRow
                                    key={index}
                                    person={person}
                                    getDonations={getDonations}
                                    setShowConfirm={setShowConfirm}
                                    setShowReject={setShowReject}
                                    setConfirmId={setConfirmId}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Popup
                title="Approve request"
                show={showConfirm}
                onClose={() => {
                    setShowConfirm(false);
                    formik.resetForm();
                }}
                onConfirm={formik.handleSubmit}
            >
                <form>
                    <div>
                        <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.location}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {formik.touched.location && formik.errors.location ? (
                            <div className="text-red-500">{formik.errors.location}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="datetime" className="block text-gray-700 mb-2">Date and Time</label>
                        <input
                            id="datetime"
                            name="datetime"
                            type="datetime-local"
                            onChange={formik.handleChange}
                            value={formik.values.datetime}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {formik.touched.datetime && formik.errors.datetime ? (
                            <div className="text-red-500">{formik.errors.datetime}</div>
                        ) : null}
                    </div>
                </form>
            </Popup>
            <Popup
                title="Reject request"
                show={showReject}
                onClose={() => {
                    setShowReject(false);
                }}
                onConfirm={() => {
                    rejectRequest(confirmId);
                    showReject(false);
                }}
            >
                Are you sure you want to reject this request?
            </Popup>
        </>
    );
};

export default AdminBloodDonations;
