import Image from "next/image";
import React from "react";

import { products } from "@/db/products";

export interface ProductListType {
  id: number;
  product: string;
  description: string;
  price: string;
  image: string;
  type: string[];
}

const ProductList: React.FC = () => {
  return (
    <div className="mt-6 mx-2 grid grid-cols-1 gap-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-80 max-w-[1240px] w-full ">
      {products.map((product) => (
        <div
          key={product.id}
          className=" p-4 rounded-2xl bg-base-card justify-center text-center w-80 md:max-w-[236px] relative mt-6"
        >
          <div className="absolute  top-[-30px] left-24 sm:top-[-30px] sm:left-14">
            <Image
              src={product.image}
              alt={product.product}
              width={120}
              height={120}
            />
          </div>
          <div className="mt-24 ">
            <div className="mb-5 flex flex-wrap justify-center gap-2">
              {product.type.map((type, index) => (
                <span
                  key={index}
                  className="border rounded-full bg-yellow-200 text-yellow-800 px-3 py-1 mr-2  text-[12px]"
                >
                  {type.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6">{product.product}</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{product.price}</p>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
