// src/components/Sidebar1.jsx

import React from 'react';
import { FaHome, FaLandmark, FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar1 = ({ isSidebarOpen, toggleSidebar }) => {
    const menuItems = [
        { name: 'Home', icon: <FaHome size={20} />, link: '/' },
        { name: 'Transactions', icon: <MdOutlineAttachMoney size={20} />, link: '/transactions' },
        { name: 'Listings', icon: <FaLandmark size={20} />, link: '/listings' },
        { name: 'Profile', icon: <FaUser size={20} />, link: '/profile' },
        { name: 'Logout', icon: <FaSignOutAlt size={20} />, link: '/logout' },
    ];

    return (
        <div
            className={`bg-gray-500 h-screen p-5 pt-8 fixed top-0 left-0 z-20 transition-all duration-300 ${isSidebarOpen ? 'w-58' : 'w-20'
                }`}
        >
            {/* Menu Button */}
            <div
                className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-1'
                    }`}
            >
                <FaBars
                    className="text-white cursor-pointer"
                    size={20}
                    onClick={toggleSidebar}
                />
            </div>

            {/* Menu Items */}
            <ul className="mt-16">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center gap-4 p-2 text-gray-300 text-sm rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-300 ${isSidebarOpen ? 'justify-start' : 'justify-center'
                            }`}
                    >
                        <Link to={item.link}>
                            <span className=''>{item.icon}</span>
                            <span className={`${!isSidebarOpen && 'hidden'} origin-left duration-300`}>
                                {item.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar1;
