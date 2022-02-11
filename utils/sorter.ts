import { I_productType } from "../redux/app/types";

export enum Sorters {
  PRICE_ASC = "Price: ascending", 
  PRICE_DESC = "Price: descending",

  NAME_ASC = "Name: ascending",
  NAME_DESC = "Name: descending",

  RATING_ASC = "Rating: worst to greatest",
  RATING_DESC = "Rating: greatest to worst",

  NUMBER_RATING_ASC = "Rating: few people to lots of people",
  NUMBER_RATING_DESC = "Rating: lots of people to few people"
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

    case Sorters.RATING_ASC:
      return products.sort((productA, productB) => productA.rating.rate - productB.rating.rate);

    case Sorters.RATING_DESC:
      return products.sort((productA, productB) => productB.rating.rate - productA.rating.rate);

    case Sorters.NUMBER_RATING_ASC:
      return products.sort((productA, productB) => productA.rating.count - productB.rating.count);

    case Sorters.NUMBER_RATING_DESC:
      return products.sort((productA, productB) => productB.rating.count - productA.rating.count);

    default:
      return products.sort((productA, productB) => productA.price - productB.price);
  }
};