// src/components/Tabs.js
import React, { useState } from 'react';
import AdminBloodDonations from './AdminBloodDonations';
import AdminBloodRequests from './AdminBloodRequests';

const AdminTabs = ({ loadCount }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Blood Requests', content: <AdminBloodRequests loadCount={loadCount}/> },
    { name: 'Blood Donations', content: <AdminBloodDonations loadCount={loadCount}/> },
  ];
  
  return (
    <div className="w-full mx-auto mt-8">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === index
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'border-b-2 border-transparent text-gray-600 hover:text-indigo-600'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border rounded-b">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default AdminTabs;
