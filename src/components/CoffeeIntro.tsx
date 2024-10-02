import { Baloo_2 } from "next/font/google";
import Image from "next/image";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CoffeeIntro() {
  return (
    <div className="flex mt-[104px]  w-full h-auto max-w-[1440px] md:px-auto  md:py-16 gap-4 ">
      {/* Text Section */}
      <div className=" flex flex-col px-4 sm:px-1 md:px-6 2xl:mx-16 lg:max-w-[900px]  ">
        <div>
          <h1
            className={`${baloo2.className} text-3xl xl:text-5xl xl:max-w-[820px] font-extrabold leading-9`}
          >
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-5 text-xl xl:text-2xl leading-7 xl:max-w-[590px] xl:mt-8">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="w-full flex flex-wrap mt-8  gap-2">
            {/* Icon Section */}
            <div>
              <div className="flex gap-1 items-center mt-2 mr-3">
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-yellow-dark">
                  <Image
                    src="/car.svg"
                    alt="Cart"
                    width={16}
                    height={16}
                    className="text-white"
                  />
                </span>
                <p className="md:text-base text-base-text">
                  Compra simples e segura
                </p>
              </div>
              <div className="flex gap-1 items-center mt-2 mr-3">
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-yellow">
                  <Image
                    src="/clock.svg"
                    alt="Clock"
                    width={16}
                    height={16}
                    className="text-white"
                  />
                </span>
                <p className="md:text-base text-base-text">
                  Entrega rápida e rastreada
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-1 items-center mt-2 mr-3">
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-purple">
                  <Image
                    src="/box.svg"
                    alt="Box"
                    width={16}
                    height={16}
                    className="text-white"
                  />
                </span>
                <p className="md:text-base text-base-text">
                  Embalagem mantém o café intacto
                </p>
              </div>
              <div className="flex gap-1 items-center mt-2 mr-3">
                <span className="flex justify-center items-center w-8 h-8 rounded-full bg-base-text">
                  <Image
                    src="/coffeeCup.svg"
                    alt="Coffee Cup"
                    width={16}
                    height={16}
                    className="text-white"
                  />
                </span>
                <p className="md:text-base text-base-text">
                  O café chega fresquinho até você
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className=" hidden  md:block xl:ml-[-60px] ">
        <Image
          src="/imgMain.png"
          alt="Hero"
          layout="responsive"
          width={476}
          height={340}
          className="object-contain md:min-h-60 md:min-w-80 xl:max-w-96 2xl:min-w-[400px] 2xl:max-w-[650px] mt-4 mr-6"
        />
      </div>
    </div>
  );
}
