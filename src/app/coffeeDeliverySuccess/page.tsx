import Header from "@/components/Header";

import ItensContextProvider from "../../../context/ItensContext";
import DeliveryData from "@/components/DeliveryData";

export default function CoffeeDeliverySuccess() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <ItensContextProvider>
          <DeliveryData />
        </ItensContextProvider>
      </main>
    </div>
  );
}
