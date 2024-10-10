"use client";
import { ProductListType } from "@/components/ProductList";
import { products } from "@/db/products";
import { createContext, ReactNode, useEffect, useState } from "react";
import { AddressesInterface } from "../../type";

interface ItensContextProviderProps {
  children: ReactNode;
}

export interface ContextItens {
  products: ProductListType[];
  totalItems: number;
  itemQuantities: { [key: number]: number };
  activeButton: string;
  address: AddressesInterface;
  setAddress: (address: AddressesInterface) => void;
  setActiveButton: (buttonName: string) => void;
  setItemQuantities: (quantities: { [key: number]: number }) => void;
  removeItem: (id: number) => void;
}

export const ItensContext = createContext({} as ContextItens);

export default function ItensContextProvider({
  children,
}: ItensContextProviderProps) {
  const [itemQuantities, setItemQuantities] = useState<{
    [key: number]: number;
  }>({});

  const totalItems = Object.values(itemQuantities || {}).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  useEffect(() => {
    const savedItemQuantities = localStorage.getItem("itemQuantities");
    if (savedItemQuantities) {
      setItemQuantities(JSON.parse(savedItemQuantities));
    }
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
    }
  }, [itemQuantities, totalItems]);

  const removeItem = (id: number) => {
    const newQuantities = { ...itemQuantities };
    delete newQuantities[id];
    setItemQuantities(newQuantities);
  };

  return (
    <ItensContext.Provider
      value={{
        products: products,
        itemQuantities,
        totalItems,
        removeItem,
        setItemQuantities,
      }}
    >
      {children}
    </ItensContext.Provider>
  );
}
