"use client";
import { createContext, ReactNode, useState } from "react";
import { products } from "@/db/products";
import { ProductListType } from "@/components/ProductList";

interface ItensContextProviderProps {
  children: ReactNode;
}

export interface ContextItens {
  itens: ProductListType[];
  setItens: (itens: ProductListType[]) => void;
  itemQuantities: { [key: number]: number };
  setItemQuantities: (quantities: { [key: number]: number }) => void;
}

export const ItensContext = createContext({} as ContextItens);

export default function ItensContextProvider({
  children,
}: ItensContextProviderProps) {
  const [itens, setItens] = useState<ProductListType[]>(products);
  const [itemQuantities, setItemQuantities] = useState<{
    [key: number]: number;
  }>({});

  return (
    <ItensContext.Provider
      value={{ itens, setItens, itemQuantities, setItemQuantities }}
    >
      {children}
    </ItensContext.Provider>
  );
}
