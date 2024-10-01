import Image from "next/image";
import ItensInCart from "./ItensInCard";

export default function Cart() {
  return (
    <div className="flex w-[38px] h-[38px] bg-yellow-light rounded-xl relative justify-center">
      <Image src="/Cart.svg" alt="Cart" width={24} height={24}></Image>
      <ItensInCart />
    </div>
  );
}
