import React, { useState, useEffect } from "react";
import { Beer } from "../types/Beer";
import { Link } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";
import { useBeerStore } from "../store/beerStore";

interface BeerCardProps {
  beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  const { purchaseBeer } = useBeerStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    purchaseBeer(beer);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4 flex flex-col transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <div
        className="relative w-full h-48 bg-gray-700 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${beer.image}), url('/default-placeholder.webp')`,
        }}
      >
        <img
          src={beer.image}
          alt={beer.name}
          className="w-full h-full object-cover rounded-t-lg opacity-0"
        />
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-100">{beer.name}</h3>
      <p className="text-gray-400 mb-2">{beer.style}</p>
      <p className="text-gray-400 mb-2">{beer.abv}% ABV</p>
      <p className="text-gray-200 font-bold mb-4">EUR {beer.price}</p>
      <Link
        to={`/beers/${beer.id}`}
        className="bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600 transition"
      >
        View Details
      </Link>
      <button
        onClick={handleBuyNow}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Buy Now
      </button>

      {isModalOpen && (
        <PurchaseModal
          beerName={beer.name}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </div>
  );
};

export default BeerCard;
