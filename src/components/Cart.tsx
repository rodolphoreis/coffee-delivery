import Image from "next/image";
import ItensInCart from "./ItensInCard";

export default function Cart() {
  return (
    <div className="flex w-[33px] h-[33px] md:w-[38px] md:h-[38px] bg-yellow-light rounded-xl relative justify-center self-center">
      <Image
        src="/Cart.svg"
        alt="Cart"
        width={24}
        height={24}
        className="w-[16px] h-[16px] self-center"
      ></Image>
      <ItensInCart />
    </div>
  );
}
