import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-red-800 text-white flex  items-center justify-center p-5">
           
            <div className="container  gap-5 mx-auto px-4  grid grid-cols-2 sm:grid-cols-3  place-items-center justify-around">
                <div className="mb-6">
                    <h2 className="text-xl font-bold">CONTACT US</h2>
                    <p>support@donation.com</p>
                    <p>helpme@donation.com</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-bold">Address</h2>
                    <p>Durbar Marg</p>
                    <p>Kathmandu, Nepal</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-bold">Phone</h2>
                    <p>Office: 9812345678</p>
                    <p>Cell: 9812345678</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
