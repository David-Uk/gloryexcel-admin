// src/pages/Posts.jsx

import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import AddModal from '../components/AddModal';

const Listings = () => {
    const [showModal, setShowModal] = useState(false);

    // Mock data for the table
    const listingsData = [
        { id: 1, title: 'Post One', date: '2024-08-01' },
        { id: 2, title: 'Post Two', date: '2024-08-10' },
    ];

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Listings</h1>

            {/* Add Button */}
            <button
                className="mb-4 p-2 bg-blue-600 text-white rounded-md flex items-center"
                onClick={openModal}
            >
                <FaPlus className="mr-2" /> Add Listings
            </button>

            {/* Posts Table */}
            <table className="w-full bg-white shadow-md rounded-md">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-4">Title</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listingsData.map((post) => (
                        <tr key={post.id} className="border-t">
                            <td className="p-4">{post.title}</td>
                            <td className="p-4">{post.date}</td>
                            <td className="p-4 flex space-x-4">
                                {/* Edit Button */}
                                <button className="text-green-500">
                                    <FaEdit />
                                </button>
                                {/* Delete Button */}
                                <button className="text-red-500">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for Adding Post */}
            {showModal && <AddModal closeModal={closeModal} />}
        </div>
    );
};

export default Listings;
