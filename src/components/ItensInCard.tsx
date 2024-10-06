"use client";
import React, { useContext } from "react";
import { ItensContext } from "../../context/ItensContext";

export default function ItensInCart() {
  const context = useContext(ItensContext);

  if (!context) {
    throw new Error("ItensInCart deve ser usado dentro de um ItensProvider");
  }

  const { itemQuantities } = context;

  const totalItems = Object.values(itemQuantities).reduce(
    (acc, quantity) => acc + quantity,
    0
  );
  return (
    <div className=" bg-yellow-dark justify-center items-center text-center rounded-full px-2 py-1   absolute top-[-6px] left-6 sm:top-[-8px] sm:left-6  ">
      <span className="flex items-center justify-center text-xs text-white  leading-tight ">
        {totalItems}
      </span>
    </div>
  );
}
