"use client";
import Image from "next/image";
import { useContext } from "react";
import { ItensContext } from "../../context/ItensContext";
import CartItemCounter from "./CartItemCounter";

interface CoffeeCardProps {
  id: number;
}

export function CoffeeCard({ id }: CoffeeCardProps) {
  const { itemQuantities, products, removeItem } = useContext(ItensContext);

  const product = products.find((product) => product.id === id);
  const quantity = itemQuantities[id] || 0;

  if (!product || quantity === 0) {
    return null;
  }

  return (
    <div className="flex px-1 py-2 border-b justify-between border-b-zinc-300 pb- md:pb-8 mb-4">
      <div className="flex gap-2 sm:gap-5">
        <div>
          <Image
            src={product.image}
            alt={product.product}
            width={74}
            height={74}
            className=" w-[64px] h-[56px] sm:w-[54px] sm:h-[36px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1>{product.product}</h1>
          <div className="flex gap-1 sm:gap3">
            <CartItemCounter id={id} />
            <button
              type="button"
              onClick={() => removeItem(id)}
              className="flex text-[12px] sm:text-base items-center bg-base-hover px-2 sm:px-4 py-1 sm:py-2 rounded-xl"
            >
              <Image
                src="/lixoIcon.svg"
                alt="Remover"
                width={22}
                height={22}
                className="items-center"
              />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base font-semibold">{product.price}</p>
      </div>
    </div>
  );
}
