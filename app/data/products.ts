import { ProductType } from "../types";

let products: ProductType[] = [
  {
    id: 1,
    name: "Quad Biking",
    price: 50,
    imgurl: "//picsum.photos/536/354",
  },
  {
    id: 2,
    name: "Camel Riding",
    price: 30,
    discounted_percentage: 5,
    imgurl: "//picsum.photos/536/354",
  },
  {
    id: 3,
    name: "Sandboarding",
    price: 20,
    imgurl: "//picsum.photos/536/354",
  },
  {
    id: 4,
    name: "Desert Safari",
    imgurl: "//picsum.photos/536/354",
    price: 100,
    discounted_percentage: 20,
  },
];
export { products };
