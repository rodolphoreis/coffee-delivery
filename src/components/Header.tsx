import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-[104px] px-40 py-4 z-50 md:max-w-[1440px] mx-auto bg-white">
      <div>
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={85} height={40}></Image>
        </Link>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="flex p-2 justify-center items-center gap-1 bg-purple-light w-[143px] h-[38px] rounded-xl"
        >
          <Image
            src="/location.svg"
            alt="Location"
            width={22}
            height={22}
          ></Image>
          <span className="Roboto text-xl font-normal leading-tight ">
            Portugal
          </span>
        </button>
        <Cart />
      </div>
    </header>
  );
}
