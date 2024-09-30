import React from "react";

interface PurchaseModalProps {
  beerName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({
  beerName,
  onClose,
  onConfirm,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-700 p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Confirm Purchase</h2>
        <p className="text-lg mb-6">
          Are you sure you want to purchase {beerName}?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
