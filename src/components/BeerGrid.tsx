import React from "react";
import { Beer } from "../types/Beer";
import BeerCard from "./BeerCard";

interface BeerGridProps {
  beers: Beer[];
}

const BeerGrid: React.FC<BeerGridProps> = ({ beers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerGrid;
