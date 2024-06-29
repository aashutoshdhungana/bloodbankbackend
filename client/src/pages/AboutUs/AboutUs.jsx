import React from 'react';
import Footer from './Footer';
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="flex-grow relative">
                <div
                    className="absolute text-center transform w-[90%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white/60 p-10">
                    <h2 className="md:text-5xl font-bold">About Us</h2>
                    <p className="md:text-2xl mt-10">
                        We are the largest and most trusted blood bank in the world. Since ages, we have been committed to providing life-saving blood to those in need. Our mission extends globally, as we organize blood donation drives and awareness campaigns to encourage more people to donate blood and save lives.
                    </p>
                </div>
                <img className="w-full h-screen object-cover" src="https://cdn.pixabay.com/photo/2017/08/07/13/05/blood-donation-2603649_1280.jpg" alt="Blood Donation" />
            </motion.div>
            <Footer />
        </div>
    );
};

export default AboutUs;
