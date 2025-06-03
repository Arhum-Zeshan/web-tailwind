type Employee={
 id:number;
  name:string;
  imgurl:string;
  desc:string;

}
type ProductType={
    id:number;
    imgurl?:string;
    name:string;
    price:number;
    discounted_percentage?:number;
}
export type {Employee, ProductType};