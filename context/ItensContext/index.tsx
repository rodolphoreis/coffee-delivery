"use client";
import { createContext, ReactNode, useState } from "react";
import { products } from "@/db/products";
import { ProductListType } from "@/components/ProductList";
import { products } from "@/db/products";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ItensContextProviderProps {
  children: ReactNode;
}

export interface ContextItens {
  products: ProductListType[];
  totalItems: number;
  itemQuantities: { [key: number]: number };
  setItemQuantities: (quantities: { [key: number]: number }) => void;
  removeItem: (id: number) => void;
}

export const ItensContext = createContext({} as ContextItens);

export default function ItensContextProvider({
  children,
}: ItensContextProviderProps) {
  const [itens, setItens] = useState<ProductListType[]>(products);
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


  return (
    <ItensContext.Provider
      value={{ itens, setItens, itemQuantities, setItemQuantities }}
    >
      {children}
    </ItensContext.Provider>
  );
}
