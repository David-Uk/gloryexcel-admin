// src/pages/Dashboard.jsx

import React from 'react';
import PostInteractionChart from '../components/PostInteractionChart';
import DashboardCard from '../components/DashboardCard';
import { FiUsers, FiFileText, FiActivity } from 'react-icons/fi';

const Dashboard = () => {
    const data = {
        totalPosts: 150,
        totalUsers: 1200,
        activeUsers: 875,
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard title="Total Posts" value={data.totalPosts} icon={<FiFileText />} />
                <DashboardCard title="Total Users" value={data.totalUsers} icon={<FiUsers />} />
                <DashboardCard title="Active Users" value={data.activeUsers} icon={<FiActivity />} />
            </div>
            <PostInteractionChart />
        </div>
    );
};

export default Dashboard;
