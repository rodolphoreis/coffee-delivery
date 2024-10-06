"use client";
import Image from "next/image";
import ItensInCart from "./ItensInCard";
import { useContext } from "react";
import { ItensContext } from "../../context/ItensContext";

export default function Cart() {
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
    <div className="flex w-[33px] h-[33px] md:w-[38px] md:h-[38px] bg-yellow-light rounded-xl relative justify-center self-center">
      <Image
        src="/Cart.svg"
        alt="Cart"
        width={24}
        height={24}
        className="w-[16px] h-[16px] self-center"
      ></Image>
      {totalItems > 0 && <ItensInCart />}
    </div>
  );
}
