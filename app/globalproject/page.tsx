import React from "react";
import Content from "../components/Content";
import { HoverTextImageAll } from "../components/HoverTextImage";
import GalleryDes from "../components/GalleryDes";
import { GridHoverMultiple } from "../components/GridHover";
import { DuneTextOnImageCardall } from "../components/DuneTextOnImageCard";
import { employees } from "@/app/data/employees";
import { Product } from "../components/ProductShowcase";
import { products } from "../data/products";
const page = () => {
 
  return (
    <div className="flex " >
      {products.map((product) => 
        <Product key={product.id} product={product} />
      )}
    </div  >
  );
};

export default page;
