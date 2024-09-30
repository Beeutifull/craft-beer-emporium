import React, { useEffect, useState } from "react";
import { useBeerStore } from "../store/beerStore";
import { fetchBeers } from "../api/beerService";
import BeerGrid from "../components/BeerGrid";
import BeerFilter from "../components/BeerFilter";
import { Beer } from "../types/Beer";

const LandingPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const { beers, setBeers, filters, setFilter, clearFilters } = useBeerStore();

  useEffect(() => {
    const loadBeers = async () => {
      try {
        const data = await fetchBeers();
        if (data.length === 0) {
          setError('No beers available');
        } else {
          setBeers(data);
        }
      } catch (err) {
        setError('Failed to fetch beers');
      }
    };
    loadBeers();
  }, [setBeers]);

  console.log('beers', beers);
  console.log('filters', filters);

  const filteredBeers = beers.filter((beer) => {
    return (
      (!filters.name || beer.name?.toLowerCase().includes(filters.name.toLowerCase().trim())) &&
      (!filters.style || beer.style?.toLowerCase().includes(filters.style.toLowerCase().trim())) &&
      (!filters.abv || beer.abv?.toString().includes(filters.abv)) &&
      (!filters.price || beer.price?.toString().includes(filters.price))
    );
  });
  

  console.log('filters', filteredBeers);

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-100">
  <BeerFilter setFilter={setFilter} clearFilters={clearFilters} />
  <BeerGrid beers={filteredBeers} />
</div>

  );
};

export default LandingPage;
