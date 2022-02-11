import { I_productType } from "../redux/app/types";

export enum Sorters {
  PRICE_ASC = "€ -> €€€", 
  PRICE_DESC = "€€€ -> €",

  NAME_ASC = "A -> Z",
  NAME_DESC = "Z --> A",
}

export const sortByPrice = (products: I_productType[], sorters: Sorters) => {
  switch (sorters) {
    case Sorters.PRICE_ASC:
      return products.sort((productA, productB) => productA.price - productB.price);

    case Sorters.PRICE_DESC:
      return products.sort((productA, productB) => productB.price - productA.price);

    case Sorters.NAME_ASC:
      return products.sort((productA, productB) => productA.title > productB.title ? 1 : -1 );

    case Sorters.NAME_DESC:
      return products.sort((productA, productB) => productA.title < productB.title ? 1 : -1 );

    default:
      return products.sort((productA, productB) => productA.price - productB.price);
  }
};