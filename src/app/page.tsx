import CoffeeIntro from "@/components/CoffeeIntro";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <CoffeeIntro />
    </div>
  );
}
