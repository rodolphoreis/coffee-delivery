import CoffeeIntro from "@/components/CoffeeIntro";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <CoffeeIntro />
      <h2
        className={`${baloo2.className} text-xl mb-2 mt-8 ml-3 xl:text-3xl xl:mb-8 font-extrabold leading-9`}
      >
        Nossos cafés
      </h2>
      <ProductList />
    </div>
  );
}
