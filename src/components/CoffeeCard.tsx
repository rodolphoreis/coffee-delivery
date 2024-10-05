import Image from "next/image";
import CartItemCounter from "./CartItemCounter";

export function CoffeeCard() {
  return (
    <div className="flex  px-1 py-2 border-b justify-between border-b-zinc-300 pb- md:pb-8 mb-4">
      <div className="flex gap-5">
        <div>
          <Image src="/Havaiano.png" alt="Coffee Card" width={74} height={74} />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1>Expresso Tradicional</h1>
          <div className="flex gap-3">
            <CartItemCounter />
            <button
              type="button"
              className="flex items-center bg-base-hover px-4 py-2 rounded-xl"
            >
              <Image
                src="/lixoIcon.svg"
                alt="PayPal"
                width={22}
                height={22}
                className="items-center "
              />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-base font-semibold">€ 15.00</p>
      </div>
    </div>
  );
}
