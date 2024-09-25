// src/components/AddModal.jsx

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // ReactQuill styling

const AddModal = ({ closeModal }) => {
    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [content, setContent] = useState('');
    const [registrationUrl, setRegistrationUrl] = useState('');

    const onDrop = (acceptedFiles) => {
        setCoverImage(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the form data
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Add New Post</h2>

                <form onSubmit={handleSubmit}>
                    {/* Title Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                    </div>

                    {/* Cover Image Upload Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Cover Image</label>
                        <div
                            {...getRootProps()}
                            className="border-dashed border-2 border-gray-300 p-4 text-center"
                        >
                            <input {...getInputProps()} />
                            {coverImage ? (
                                <p>{coverImage.name}</p>
                            ) : (
                                <p>Drag and drop an image, or click to select one</p>
                            )}
                        </div>
                    </div>

                    {/* WYSIWYG Content Editor */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Content</label>
                        <ReactQuill value={content} onChange={setContent} />
                    </div>

                    {/* Registration URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Registration URL</label>
                        <input
                            type="url"
                            value={registrationUrl}
                            onChange={(e) => setRegistrationUrl(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddModal;
