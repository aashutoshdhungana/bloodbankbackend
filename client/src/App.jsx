import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './pages/HomePage/Body';
import AdminSidebar from './components/Sidebar/AdminSidebar';
import DonerPage from './pages/DonerPage/DonerPage';
import PatientPage from './pages/PatientPage/PatientPage';
import LoginPage from './pages/Login/LoginPage';
import RegistrationPage from './pages/Register/RegistrationPage';
import AboutUs from './pages/AboutUs/AboutUs';
import DonorDashboard from './pages/Donor/DonorDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/donorDashboard" element={<DonorDashboard />} />
        <Route path="/patient-page" element={<PatientPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
