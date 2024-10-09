import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

export default function Header() {
  const { totalItems } = useContext(ItensContext);
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-[104px] px-6   py-4 z-50  mx-auto bg-white">
      <div className=" max-w-[1240px] mx-auto flex justify-between w-full  md:px-10">
        <div className="w-16 md:w-20 self-center">
          <Link href="/">
            <Image src="/Logo.svg" alt="Logo" width={85} height={40}></Image>
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="hidden md:block">
            <button
              type="button"
              className="flex px-4 py-2 justify-center items-center gap-1 bg-purple-light w-full rounded-xl"
            >
              <Image
                src="/location.svg"
                alt="Location"
                width={22}
                height={22}
              ></Image>
              <span className="text-base Roboto font-normal leading-tight ">
                Portugal
              </span>
            </button>
          </div>
          <Link href="/checkout" className="cursor-pointer">
            <Cart />
          </Link>
        </div>
      </div>
    </header>
  );
}
