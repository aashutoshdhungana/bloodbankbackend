
import React, { useState } from 'react';

const MakeRequest = () => {
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [reason, setReason] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [unit, setUnit] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Patient Name:', patientName);
        console.log('Patient Age:', patientAge);
        console.log('Reason:', reason);
        console.log('Blood Group:', bloodGroup);
        console.log('Unit (in ml):', unit);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">MAKE BLOOD REQUEST</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="patientName" className="block text-gray-700 mb-2">Patient Name</label>
                        <input
                            type="text"
                            id="patientName"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="patientAge" className="block text-gray-700 mb-2">Patient Age</label>
                        <input
                            type="number"
                            id="patientAge"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={patientAge}
                            onChange={(e) => setPatientAge(e.target.value)}
                            min="0"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reason" className="block text-gray-700 mb-2">Reason</label>
                        <input
                            type="text"
                            id="reason"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bloodGroup" className="block text-gray-700 mb-2">Blood Group</label>
                        <select
                            id="bloodGroup"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            required
                        >
                            <option value="">Choose option</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="unit" className="block text-gray-700 mb-2">Unit (in ml)</label>
                        <input
                            type="number"
                            id="unit"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            min="0"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Request</button>
                </form>
            </div>
        </div>
    );
};

export default MakeRequest;
