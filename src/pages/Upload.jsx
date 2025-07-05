import React, { useState } from 'react';
import UploadBox from '../components/UploadBox';
import ReceiptCard from '../components/ReceiptCard';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [receipt, setReceipt] = useState(null);

  const handleImageUpload = (file) => {
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);

    // Simulate analysis
    setTimeout(() => {
      setReceipt({
        vendor: 'Big Bazaar',
        date: '2025-07-04',
        items: [
          { name: 'Milk', price: 60 },
          { name: 'Bread', price: 40 },
        ],
        tax: 10,
        total: 110,
        category: 'Grocery',
      });
    }, 1500);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <UploadBox onUpload={handleImageUpload} />
      {image && <img src={image} alt="receipt" className="rounded max-h-64 mx-auto" />}
      {receipt && <ReceiptCard data={receipt} />}
    </div>
  );
};

export default Upload;
