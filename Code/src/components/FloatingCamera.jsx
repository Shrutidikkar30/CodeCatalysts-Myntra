// src/components/FloatingCamera.jsx
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCamera } from 'react-icons/fa';

const FloatingCamera = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
    if (onUpload) {
      onUpload(file);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative group">
        <div
          {...getRootProps()}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer"
        >
          <input {...getInputProps()} />
          <FaCamera size={24} />
        </div>
        <div className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-3">
          Upload image from gallery
        </div>
      </div>
    </div>
  );
};

export default FloatingCamera;
