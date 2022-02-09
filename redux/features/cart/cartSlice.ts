import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_productType } from "../../app/types";

interface I_productLineState {
  product: I_productType;
  quantity: number;
}

interface I_cartState {
  content: {
    products: I_productLineState[];
    total: number;
  }
}

const initialState: I_cartState = {
  content: {
    products: [],
    total: 0
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<I_productType>) => {
      // state.content.products = [...state.content.products, { product: action.payload, quantity: 1 }];

      state.content = {
        products: [...state.content.products, { product: action.payload, quantity: 1 }],
        total: state.content.total + action.payload.price
      }
    },
    removeProduct: (state, action: PayloadAction<I_productLineState>) => {
      const index = state.content.products.indexOf(action.payload);

      if (index > -1) {
        // state.content.products = state.content.products.splice(index, 1);
        state.content = {
          products: state.content.products.splice(index, 1),
          total: state.content.total - action.payload.product.price
        }
      }
    },
    removeInstanceOfProduct: (state, action: PayloadAction<I_productLineState>) => {
      if (action.payload.quantity < 1) return;
      if (action.payload.quantity === 1) removeProduct(action.payload);
      else {
        state.content = {
          products: state.content.products.map(product => {
            if (product === action.payload) {
              return {
                product: action.payload.product,
                quantity: action.payload.quantity - 1
              }
            } 

            return product;
          }),
          total: state.content.total - action.payload.product.price
        }
      }
    }
  }
})

export const { addProduct, removeProduct, removeInstanceOfProduct } = cartSlice.actions;
export default cartSlice.reducer;