import React, { useState, ChangeEvent } from "react";
import useDebounce from "../hooks/useDebounce";

interface BeerFilterProps {
  setFilter: (filterType: string, value: string) => void;
  clearFilters: () => void;
}

const BeerFilter: React.FC<BeerFilterProps> = ({ setFilter, clearFilters }) => {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [abv, setAbv] = useState("");
  const [price, setPrice] = useState("");

  const debouncedName = useDebounce(name, 300);
  const debouncedStyle = useDebounce(style, 300);
  const debouncedAbv = useDebounce(abv, 300);
  const debouncedPrice = useDebounce(price, 300);

  React.useEffect(() => {
    setFilter("name", debouncedName);
  }, [debouncedName, setFilter]);

  React.useEffect(() => {
    setFilter("style", debouncedStyle);
  }, [debouncedStyle, setFilter]);

  React.useEffect(() => {
    setFilter("abv", debouncedAbv);
  }, [debouncedAbv, setFilter]);

  React.useEffect(() => {
    setFilter("price", debouncedPrice);
  }, [debouncedPrice, setFilter]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "style":
        setStyle(value);
        break;
      case "abv":
        setAbv(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-200">Filter Beers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          className="p-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-100"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="style"
          placeholder="Filter by Style"
          className="p-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-100"
          value={style}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="abv"
          placeholder="Min ABV"
          className="p-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-100"
          value={abv}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          className="p-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-100"
          value={price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={clearFilters}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default BeerFilter;
