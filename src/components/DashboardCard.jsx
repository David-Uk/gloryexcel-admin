import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <div className="text-4xl text-blue-500">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-500 text-2xl">{value}</p>
            </div>
        </div>
    );
};

export default DashboardCard;
