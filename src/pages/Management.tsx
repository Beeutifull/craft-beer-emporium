// src/pages/Management.tsx
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useBeerStore } from "../store/beerStore";
import { Beer } from "../types/Beer";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Management: React.FC = () => {
  const { beers, addBeer } = useBeerStore();
  const [newBeer, setNewBeer] = useState<Beer>({
    id: beers.length + 1,
    name: "",
    style: "",
    abv: 0,
    price: 0,
    details: "",
    image: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewBeer((prevBeer) => ({
      ...prevBeer,
      [name]: value,
    }));
  };

  const handleAddBeer = (e: React.FormEvent) => {
    e.preventDefault();
    addBeer({ ...newBeer, id: beers.length + 1 });
    setNewBeer({
      id: beers.length + 2,
      name: "",
      style: "",
      abv: 0,
      price: 0,
      details: "",
      image: "",
    });
  };

  const chartData = {
    labels: beers.slice(0, 10).map((beer) => beer.name),
    datasets: [
      {
        label: "Sales",
        data: beers.slice(0, 10).map(() => Math.floor(Math.random() * 100)),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {/* Top 10 Sold Beers Chart */}
      <h2 className="text-2xl font-bold mb-4">Top 10 Sold Beers</h2>
      <div className="w-full mb-8">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Top 10 Sold Beers" },
            },
          }}
        />
      </div>

      {/* Add New Beer Form */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Add New Beer</h2>
      <form onSubmit={handleAddBeer} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Beer Name"
          value={newBeer.name}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="text"
          name="style"
          placeholder="Style"
          value={newBeer.style}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="number"
          name="abv"
          placeholder="ABV"
          value={newBeer.abv}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newBeer.price}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
          required
        />
        <textarea
          name="details"
          placeholder="Details"
          value={newBeer.details}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
          required
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newBeer.image}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add Beer
        </button>
      </form>
    </div>
  );
};

export default Management;
