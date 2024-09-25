// src/components/Layout.jsx

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Sidebar1 from './Sidebar1';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Layout with Sidebar and Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
                <Sidebar1 isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <div
                    className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? 'ml-58 overflow-x-hidden' : 'ml-20'
                        }`}
                >
                    <Outlet /> {/* This will render the routed components */}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
