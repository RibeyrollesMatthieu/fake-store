import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertToCentsThenEuros } from "../../../utils/prices";
import { I_productType } from "../../app/types";

interface I_productLineState {
  product: I_productType;
  quantity: number;
}

interface I_cartState {
  content: {
    products: I_productLineState[];
    total: number;
    quantity: number;
  }
}

const initialState: I_cartState = {
  content: {
    products: [],
    total: 0,
    quantity: 0
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<I_productLineState>) => {
      /* TODO: improve it */
      let addedIn: boolean = false;

      state.content = {
        /* if product is already in cart, we just update the quantity */
        products: state.content.products.map(product => {
          if (product.product.title === action.payload.product.title) {
            addedIn = true;

            return {
              product: product.product,
              quantity: product.quantity + action.payload.quantity
            }
          }

          return product;
        }),
        total: (addedIn) ? convertToCentsThenEuros(state.content.total + action.payload.product.price * action.payload.quantity) : state.content.total,
        quantity: (addedIn) ? state.content.quantity + action.payload.quantity : state.content.quantity
      }

      if (!addedIn) {
        state.content = {
          products: [ ...state.content.products, action.payload ],
          total: convertToCentsThenEuros(state.content.total + action.payload.product.price * action.payload.quantity),
          quantity: state.content.quantity + action.payload.quantity
        }
      }
    },
    removeProduct: (state, action: PayloadAction<I_productLineState>) => {      
      state.content = {
        products: state.content.products.filter(product => {
          if (product.product.title === action.payload.product.title) return;
          return product;
        }),
        total: convertToCentsThenEuros(state.content.total - action.payload.product.price * action.payload.quantity),
        quantity: state.content.quantity - action.payload.quantity
      }
    },
    removeInstanceOfProduct: (state, action: PayloadAction<I_productLineState>) => {
      if (action.payload.quantity < 1) return;
      if (action.payload.quantity === 1) {
        /* TODO: as I could not call the removeProductReducer, find a way to simplify it */
        state.content = {
          products: state.content.products.filter(product => {
            if (product.product.title === action.payload.product.title) return;
            return product;
          }),
          total: convertToCentsThenEuros(state.content.total - action.payload.product.price * action.payload.quantity),
          quantity: state.content.quantity - action.payload.quantity
        }
      }
      else {
        state.content = {
          products: state.content.products.map(product => {
            if (product.product.title === action.payload.product.title) {
              return {
                product: action.payload.product,
                quantity: action.payload.quantity - 1
              }
            } 

            return product;
          }),
          total: convertToCentsThenEuros(state.content.total - action.payload.product.price),
          quantity: state.content.quantity - 1
        }
      }
    },
    clearCart: state => { state.content = initialState.content }
  }
})

export const { addProduct, removeProduct, removeInstanceOfProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;