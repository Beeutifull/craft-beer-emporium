// src/pages/BeerDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBeerStore } from "../store/beerStore";
import { Beer } from "../types/Beer";
import { fetchBeers } from "../api/beerService";

const BeerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { beers } = useBeerStore();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundBeer = beers.find((beer) => beer.id === parseInt(id!));
    if (foundBeer) {
      setBeer(foundBeer);
      setLoading(false);
    } else {
      const fetchBeerDetails = async () => {
        const allBeers = await fetchBeers();
        const beerFromApi = allBeers.find((beer) => beer.id === parseInt(id!));
        setBeer(beerFromApi || null);
        setLoading(false);
      };
      fetchBeerDetails();
    }
  }, [id, beers]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!beer) {
    return <div className="text-center mt-10">Beer not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
        <img
          src={beer.image}
          alt={beer.name}
          className="w-full h-96 object-cover mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">{beer.name}</h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Name:</strong> {beer.name}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Style:</strong> {beer.style}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>ABV:</strong> {beer.abv}%
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Price:</strong> EUR {beer.price}
        </p>
        <p className="text-lg text-gray-700 mb-6">{beer.details}</p>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BeerDetails;
