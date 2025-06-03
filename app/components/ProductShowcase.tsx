"use client";

import React from "react";
import { ProductType } from "@/app/types";
import { useState } from "react";
import { Heart } from "lucide-react";

interface Productprops {
  product: ProductType;
}

const Product = ({ product }: Productprops) => {
  const [isChecked, setIsChecked] = useState(false);
  const { id, name, price, discounted_percentage = 0 } = product;
  const hasDiscount = discounted_percentage > 0;
  const discountPrice = () => {
    return price - (price * discounted_percentage) / 100;
  };

  return (
    <div className="flex  gap-8 p-8 bg-white">
      <div className="w-64 relative">
        <div className="w-full h-96 bg-blue-400">
          <Heart
            className={`pt-2 size-6 cursor-pointer ${isChecked ? "text-red-500" : "text-gray-500"}`}
            onClick={() => setIsChecked(!isChecked)}
          />

          {hasDiscount && (
            <div className="absolute top-2 right-2 size-16 flex items-center bg-orange-500 text-white text-xs justify-center rounded-full">
              {discounted_percentage}%
            </div>
          )}
        </div>
        <h3 className="text-gray-800 mt-2 text-lg font-medium">{name}</h3>

        {!hasDiscount ? (
          <span className="text-gray-800">${price}</span>
        ) : (
          <>
            <del>
              <span className="text-gray-500">${price}</span>
            </del>
            <span className="text-red-500 inline ml-2">${discountPrice()}</span>
          </>
        )}
      </div>
    </div>
  );
};
export { Product };
