import Header from "@/components/Header";
import Image from "next/image";
import ItensContextProvider from "../../../context/ItensContext";

export default function Checkout() {
  return (
    <ItensContextProvider>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-1">
          <section className="mt-28 lg:mt-44 flex flex-col  lg:gap-28 lg:flex-row items-center lg:justify-between">
            <div className=" md:mb-10">
              <div className="mb-6 md:mb-10">
                <h1 className="text-3xl font-bold leading-9 text-orange-400">
                  Uhu! Pedido confirmado
                </h1>
                <p className="text-sm text-zinc-500">
                  Agora é só aguardar que logo o café chegará até você
                </p>
              </div>
              <div className="p-3 md:p-10 border border-purple-400 rounded-tr-3xl rounded-bl-3xl rounded-tl-[4px] rounded-br-[4px] max-w-[446px]">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-3">
                    <div className="bg-purple content-center rounded-full px-2 h-10">
                      <Image
                        src="/locationSuccess.svg"
                        alt="Cart"
                        width={22}
                        height={22}
                        className=" self-start"
                      ></Image>
                    </div>
                    <div>
                      <h1 className="w-72">
                        Entrega em Rua Trav da Igreja, 186 - Creixomil -
                        Guimarães
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-yellow-500 content-center rounded-full px-2 h-10">
                      <Image
                        src="/clockIcon.svg"
                        alt="Cart"
                        width={22}
                        height={22}
                        className=" self-start "
                      ></Image>
                    </div>
                    <div>
                      <h1>Previsão de entrega</h1>
                      <h1>20 min - 30 min</h1>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-orange-500 content-center rounded-full px-2 h-10">
                      <Image
                        src="/moneyIconWhite.svg"
                        alt="Cart"
                        width={22}
                        height={22}
                        className=" self-start"
                      ></Image>
                    </div>

                    <div>
                      <h1>Pagamento na entrega</h1>
                      <h1>Cartão de Crédito</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/delivery.webp"
                alt="Cart"
                width={400}
                height={322}
                className="w-[300px] h-[240px] md:w-[400px] md:h-[322px] self-start"
              ></Image>
            </div>
          </section>
        </main>
      </div>
    </ItensContextProvider>
  );
}
