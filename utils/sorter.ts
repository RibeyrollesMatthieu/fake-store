import { I_productType } from "../redux/app/types";

export enum Sorters {
  PRICE_ASC = "€ -> €€€", 
  PRICE_DESC = "€€€ -> €"
}

export const sortByPrice = (products: I_productType[], sorters: Sorters) => {
  switch (sorters) {
    case Sorters.PRICE_ASC:
      return products.sort((productA, productB) => productA.price - productB.price);

    case Sorters.PRICE_DESC:
      return products.sort((productA, productB) => productB.price - productA.price);

    default:
      return products.sort((productA, productB) => productA.price - productB.price);
  }
};