import Form from "@/components/Form";
import Header from "@/components/Header";

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <section className="mt-44">
          <Form />
        </section>
      </main>
    </div>
  );
}
