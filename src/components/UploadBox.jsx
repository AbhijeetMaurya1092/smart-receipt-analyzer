import React from 'react';

const UploadBox = ({ onUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-blue-400 p-6 rounded text-center">
      <p className="mb-2">Upload your receipt image</p>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default UploadBox;
