import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [bloodGroup, setBloodGroup] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        // Handle registration logic here
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Email:', email);
        console.log('Blood Group:', bloodGroup);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="bloodGroup" className="block text-gray-700 mb-2">Choose Blood Group</label>
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
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200">Register</button>
                    <div className='flex mt-4 space-x-2 justify-center'>
                        <p>Already have an account?</p>
                        <button onClick={() => navigate('/login-page')} className="text-blue-500 hover:underline">Login Here</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
