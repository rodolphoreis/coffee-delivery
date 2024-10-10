"use client";
import { useContext } from "react";
import { ItensContext } from "../../context/ItensContext";

export default function CartItemCounter({ id }: { id: number }) {
  const { itemQuantities = {}, setItemQuantities } = useContext(ItensContext);

  const handleIncrement = () => {
    setItemQuantities({
      ...itemQuantities,
      [id]: (itemQuantities[id] || 0) + 1,
    });
  };

  const handleDecrement = () => {
    if (itemQuantities[id] > 0) {
      setItemQuantities({
        ...itemQuantities,
        [id]: itemQuantities[id] - 1,
      });
    }
  };

  return (
    <div className="flex items-center gap-2 bg-base-hover px-2 py-1 sm:px-4 sm:py-2 rounded-xl">
      <button
        type="button"
        className="bg-base-hover text-base sm:text-xl font-medium text-purple-700"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="ml-1 bg-base-hover">{itemQuantities[id] || 0}</span>
      <button
        type="button"
        className="bg-base-hover text-base sm:text-xl text-purple-700 font-medium"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}
