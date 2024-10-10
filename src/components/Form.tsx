/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Image from "next/image";

import { Baloo_2 } from "next/font/google";
import { useContext, useEffect } from "react";
import { CoffeeCard } from "./CoffeeCard";
import { ItensContext } from "../../context/ItensContext";
import { useRouter } from "next/navigation";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Inputs = zod.object({
  codigoPostal: zod
    .string()
    .min(7, "O código postal deve ter no mínimo 7 dígitos")
    .max(8, "O código postal deve ter no máximo 8 dígitos"),
  rua: zod.string().min(1, "Este campo é obrigatório"),
  numero: zod.string().min(1, "Número inválido"),
  complemento: zod.string(),
  freguesia: zod.string().min(1, "Este campo é obrigatório"),
  cidade: zod.string().min(1, "Este campo é obrigatório"),
  metodoPagamento: zod.string(),
});

type Inputs = zod.infer<typeof Inputs>;

const Form = () => {
  const router = useRouter();

  const {
    products,
    itemQuantities,
    setActiveButton,
    activeButton,
    setAddress,
    address,
  } = useContext(ItensContext);

  const { register, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(Inputs),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updatedData = { ...data, metodoPagamento: activeButton };

    setAddress(updatedData);
    localStorage.setItem("deliveryData", JSON.stringify(updatedData));

    setTimeout(() => {
      router.push("/coffeeDeliverySuccess");
    }, 100);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const selectedItems =
    products && itemQuantities
      ? products.filter((item) => itemQuantities[item.id] > 0)
      : [];

  const totalPrice = selectedItems.reduce((acc, item) => {
    const priceValue = parseFloat(
      item.price.replace("€ ", "").replace(",", ".")
    );
    return acc + priceValue * itemQuantities[item.id];
  }, 0);

  const delivery = 3.0;
  const ThereAreNoProductsSelected = "0,00";
  const grandTotal = totalPrice + delivery;

  return (
    <main className="mx-2 sm:mx-0 flex flex-col  gap-6 sm:gap-16 xl:flex-row">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-5 p-4 sm:mx-0 sm:p-10"
      >
        <div className="flex flex-col p-4 sm:mx-0 sm:p-10 rounded-xl bg-base-card">
          <h1
            className={`${baloo2.className} text-base mb-2 mt-2  xl:text-2xl xl:mb-8 font-extrabold leading-9`}
          >
            Complete seu pedido
          </h1>
          <div className="flex gap-2 mb-8 ">
            <Image
              src="/locationFormIcon.svg"
              alt="Cart"
              width={22}
              height={22}
              className=" self-start"
            ></Image>
            <div className="flex flex-col ">
              <h1 className="font-medium text-base">Endereço de Entrega</h1>
              <p className="text-sm text-zinc-500">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-4 mb-4">
            <input
              type="text"
              placeholder="Código Postal"
              {...register("codigoPostal")}
              className="w-40 p-2 rounded-[4px] placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Rua"
              {...register("rua")}
              className="rounded-[4px] p-2 placeholder:text-sm"
            />
          </div>

          <div className="flex gap-1 sm:gap-3 mb-4">
            <input
              type="number"
              placeholder="Número"
              {...register("numero")}
              className="rounded-[4px] w-24 p-2 placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Complemento (Opcional)"
              {...register("complemento")}
              className="flex flex-1 rounded-[4px] p-2 placeholder:text-sm"
            />
          </div>

          <div className="flex gap-1 sm:gap-3 mb-4">
            <input
              type="text"
              placeholder="Freguesia"
              {...register("freguesia")}
              className="rounded-[4px] p-2 w-24 placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Cidade"
              {...register("cidade")}
              className="rounded-[4px] p-2 flex-1"
            />
          </div>
          <div>
            <div className="mb-8">
              <div className="flex gap-2">
                <Image
                  src="/moneyIcon.svg"
                  alt="Cart"
                  width={22}
                  height={22}
                  className=" self-start"
                ></Image>
                <div>
                  <h1 className="font-medium text-base">Pagamento</h1>
                  <p className="text-sm text-zinc-500">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <button
                type="button"
                onClick={() => handleButtonClick("Credito")}
                className={`flex text-[12px] sm:text-base items-center gap-2 p-2 sm:p-4 rounded-[6px] ${
                  activeButton === "Credito" ? "border-2 border-purple-500" : ""
                }`}
              >
                <Image
                  src="/cartaoIcon.svg"
                  alt="Cartão"
                  width={22}
                  height={22}
                  className="self-start items-center"
                />
                CRÉDITO
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("Paypal")}
                className={`flex text-[12px] sm:text-base items-center gap-2 p-2 sm:p-4 rounded-[6px] ${
                  activeButton === "Paypal" ? "border-2 border-purple-500" : ""
                }`}
              >
                <Image
                  src="/paypal.svg"
                  alt="PayPal"
                  width={22}
                  height={22}
                  className="self-start"
                />
                PAYPAL
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("Dinheiro")}
                className={`flex text-[12px] sm:text-base items-center gap-2 p-2 sm:p-4 rounded-[6px] ${
                  activeButton === "Dinheiro"
                    ? "border-2 border-purple-500"
                    : ""
                }`}
              >
                <Image
                  src="/notaIcon.svg"
                  alt="Dinheiro"
                  width={22}
                  height={22}
                  className="self-start"
                />
                DINHEIRO
              </button>
            </div>
            <input
              type="hidden"
              value={activeButton}
              {...register("metodoPagamento")}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col flex-1 h-full p-4 sm:mx-0 sm:p-10 rounded-xl bg-base-card  justify-between  xl:min-w-[550px]">
            <div>
              <h1
                className={`${baloo2.className} text-base mb-2 mt-2  xl:text-2xl xl:mb-8 font-bold leading-9`}
              >
                Complete seu pedido
              </h1>
              {selectedItems.map((item) => (
                <CoffeeCard key={item.id} id={item.id} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h1>Total de itens</h1>

                <p>{totalPrice.toFixed(2).replace(".", ",")}</p>
              </div>
              <div className="flex justify-between">
                <h1>Entrega</h1>
                {selectedItems.length > 0 ? (
                  <p>{delivery.toFixed(2).replace(".", ",")}</p>
                ) : (
                  <p>{ThereAreNoProductsSelected}</p>
                )}
              </div>
              <div className="flex justify-between font-bold">
                <h1>Total</h1>
                {selectedItems.length > 0 ? (
                  <p>{grandTotal.toFixed(2).replace(".", ",")}</p>
                ) : (
                  <p>0,00</p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full rounded-[6px] p-4 text-white text-center text-[14px] sm:text-base font-bold mt-6 ${
                  activeButton === "" ? "bg-yellow" : "bg-purple-500"
                }`}
              >
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Form;
