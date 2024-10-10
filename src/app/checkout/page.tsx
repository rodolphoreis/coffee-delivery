import Form from "@/components/Form";
import Header from "@/components/Header";
import ItensContextProvider from "../../../context/ItensContext";

export default function Checkout() {
  return (
    <ItensContextProvider>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-1">
          <section className="mt-[92px] sm:mt-44">
            <Form />
          </section>
        </main>
      </div>
    </ItensContextProvider>
  );
}
