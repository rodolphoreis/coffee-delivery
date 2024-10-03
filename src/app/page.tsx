import CoffeeIntro from "@/components/CoffeeIntro";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <CoffeeIntro />
      <ProductList />
    </div>
  );
}
