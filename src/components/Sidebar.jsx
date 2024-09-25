// src/components/Sidebar.jsx

import React, { useState } from 'react';
import { FaHome, FaGraduationCap, FaPenFancy, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [activeTab, setActiveTab] = useState('Home'); // Track active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 bg-gray-800 p-4 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'
                } h-screen`}
        >
            <div className="flex justify-between items-center mb-10">
                <h1
                    className={`text-lg font-bold transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    Admin Panel
                </h1>
                <button onClick={toggleSidebar} className="text-white">
                    {isSidebarOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                </button>
            </div>

            <ul className="space-y-4">
                {/* Home Tab */}
                <li
                    className={`flex items-center space-x-4 cursor-pointer p-2 rounded ${activeTab === 'Home' ? 'bg-gray-700' : ''
                        }`}
                    onClick={() => handleTabClick('Home')}
                >
                    <FaHome size={20} />
                    <span
                        className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'
                            }`}
                    >
                        Home
                    </span>
                </li>

                {/* Programs Tab */}
                <li
                    className={`flex items-center space-x-4 cursor-pointer p-2 rounded ${activeTab === 'Programs' ? 'bg-gray-700' : ''
                        }`}
                    onClick={() => handleTabClick('Programs')}
                >
                    <FaGraduationCap size={20} />
                    <span
                        className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'
                            }`}
                    >
                        Programs
                    </span>
                </li>

                {/* Posts Tab */}
                <li
                    className={`flex items-center space-x-4 cursor-pointer p-2 rounded ${activeTab === 'Posts' ? 'bg-gray-700' : ''
                        }`}
                    onClick={() => handleTabClick('Posts')}
                >
                    <FaPenFancy size={20} />
                    <span
                        className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'
                            }`}
                    >
                        Posts
                    </span>
                </li>

                {/* Profile Tab */}
                <li
                    className={`flex items-center space-x-4 cursor-pointer p-2 rounded ${activeTab === 'Profile' ? 'bg-gray-700' : ''
                        }`}
                    onClick={() => handleTabClick('Profile')}
                >
                    <FaUser size={20} />
                    <span
                        className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'
                            }`}
                    >
                        Profile
                    </span>
                </li>

                {/* Logout Tab */}
                <li
                    className={`flex items-center space-x-4 cursor-pointer p-2 rounded ${activeTab === 'Logout' ? 'bg-gray-700' : ''
                        }`}
                    onClick={() => handleTabClick('Logout')}
                >
                    <FaSignOutAlt size={20} />
                    <span
                        className={`transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'
                            }`}
                    >
                        Logout
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
