import React from "react";
import { useBeerStore } from "../store/beerStore";

const Purchases: React.FC = () => {
  const { purchases } = useBeerStore();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Purchases</h2>
      {purchases.length === 0 ? (
        <p className="text-gray-700">You haven't purchased any beers yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {purchases.map((beer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden p-4"
            >
              <img
                src={beer.image}
                alt={beer.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{beer.name}</h3>
              <p className="text-gray-600 mb-1">{beer.style}</p>
              <p className="text-gray-600 mb-1">{beer.abv}% ABV</p>
              <p className="text-gray-800 font-bold">EUR {beer.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchases;
