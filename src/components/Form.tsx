"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Image from "next/image";

import { Baloo_2 } from "next/font/google";
import { useContext, useState } from "react";
import { CoffeeCard } from "./CoffeeCard";
import Link from "next/link";
import { ItensContext } from "../../context/ItensContext";

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
});

type Inputs = zod.infer<typeof Inputs>;

const Form = () => {
  const { products, itemQuantities } = useContext(ItensContext);

  const { register, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(Inputs),
  });
  const [activeButton, setActiveButton] = useState("");

  /*   const watchCodigoPostal = watch("codigoPostal");
  const watchRua = watch("rua");
  const watchFreguesia = watch("freguesia");
  const watchCidade = watch("cidade");
  const watchNumero = watch("numero");
  const watchComplemento = watch("complemento");
*/
  /*   const isSubmitDisabled =
    !watchCodigoPostal &&
    !watchRua &&
    !watchFreguesia &&
    !watchCidade &&
    !watchNumero &&
    !watchComplemento;
*/
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <main className="mx-2 sm:mx-0 flex flex-col  gap-6 sm:gap-16 xl:flex-row">
      <div>
        <h1
          className={`${baloo2.className} text-base mb-2 mt-2  xl:text-2xl xl:mb-8 font-extrabold leading-9`}
        >
          Complete seu pedido
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-4 sm:mx-0 sm:p-10 rounded-xl bg-base-card"
        >
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
              className="rounded-[4px] w-40 p-2 placeholder:text-sm"
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
              className="rounded-[4px] p-2 w-40 placeholder:text-sm"
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
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleButtonClick("credito")}
                className={`flex gap-2 p-2 sm:p-4 rounded-[6px] ${
                  activeButton === "credito" ? "border-2 border-purple-500" : ""
                }`}
              >
                <Image
                  src="/cartaoIcon.svg"
                  alt="Cartão"
                  width={22}
                  height={22}
                  className="self-start"
                />
                CRÉDITO
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("paypal")}
                className={`flex gap-2 p-2 sm:p-4 rounded-[6px] ${
                  activeButton === "paypal" ? "border-2 border-purple-500" : ""
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
                onClick={() => handleButtonClick("dinheiro")}
                className={`flex gap-2 p-2 sm:p-4 rounded-[6px] ${
                  activeButton === "dinheiro"
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
          </div>
        </form>
      </div>

      <div>
        <h1
          className={`${baloo2.className} text-base mb-2 mt-2  xl:text-2xl xl:mb-8 font-bold leading-9`}
        >
          Complete seu pedido
        </h1>
        <div className="flex flex-col flex-1 p-4 sm:mx-0 sm:p-10 rounded-xl bg-base-card  justify-between  xl:min-w-[550px]">
          <div>
            <CoffeeCard />
            <CoffeeCard />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1>Total de itens</h1>
              <p>€ 11,80</p>
            </div>
            <div className="flex justify-between">
              <h1>Entrega</h1>
              <p>€ 3,00</p>
            </div>
            <div className="flex justify-between font-bold">
              <h1>Total</h1>
              <p>€ 14,80</p>
            </div>
            <Link
              href="/coffeeDeliverySuccess"
              className={`w-full rounded-[6px] p-4 text-white text-center text-base font-bold mt-6 ${
                activeButton === "" ? "bg-yellow" : "bg-purple-500"
              }`}
            >
              CONFIRMAR PEDIDO
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
