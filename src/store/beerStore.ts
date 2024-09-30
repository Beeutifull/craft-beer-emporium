import { create } from "zustand";
import { Beer } from "../types/Beer";

interface BeerState {
  beers: Beer[];
  purchases: Beer[]; // New state for purchased beers
  filters: {
    name: string;
    style: string;
    abv: string;
    price: string;
  };
  setBeers: (beers: Beer[]) => void;
  addBeer: (beer: Beer) => void;
  purchaseBeer: (beer: Beer) => void;
  setFilter: (filterType: string, value: string) => void;
  clearFilters: () => void;
}

export const useBeerStore = create<BeerState>((set) => ({
  beers: [],
  purchases: [],
  filters: {
    name: "",
    style: "",
    abv: "",
    price: "",
  },
  setBeers: (beers) => set({ beers }),
  addBeer: (beer) => set((state) => ({ beers: [...state.beers, beer] })),
  purchaseBeer: (beer) =>
    set((state) => ({
      purchases: [...state.purchases, beer],
    })),
  setFilter: (filterType, value) =>
    set((state) => ({
      filters: { ...state.filters, [filterType]: value },
    })),
  clearFilters: () =>
    set({
      filters: {
        name: "",
        style: "",
        abv: "",
        price: "",
      },
    }),
}));
