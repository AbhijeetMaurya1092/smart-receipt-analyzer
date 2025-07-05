import React from 'react';
import { Button } from './ui/button';

const ReceiptCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded space-y-3">
      <h2 className="text-xl font-semibold">Vendor: {data.vendor}</h2>
      <p>Date: {data.date}</p>
      <ul className="list-disc pl-5">
        {data.items.map((item, i) => (
          <li key={i}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <p>Tax: ₹{data.tax}</p>
      <p className="font-bold">Total: ₹{data.total}</p>
      <p className="italic text-sm">Category: {data.category}</p>
      <Button>Sync to Wallet</Button>
    </div>
  );
};

export default ReceiptCard;
