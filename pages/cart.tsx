import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { clearCart, removeInstanceOfProduct, removeProduct } from "../redux/features/cart/cartSlice";
import { convertToCentsThenEuros } from "../utils/prices";

const Cart = () => {

  const cart = useAppSelector(cart => cart.cart.content);
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1>Your cart</h1>

      <ul>
        {
          cart.products.map(product => (
            <li key={product.product.title}>
              {product.product.title} (x{product.quantity}): {convertToCentsThenEuros(product.quantity * product.product.price)}€
              <button onClick={() => dispatch(removeInstanceOfProduct(product))}>Remove one</button>
              <button onClick={() => dispatch(removeProduct(product))} >Remove all</button>
            </li>
          ))
        }
      </ul>

      <button onClick={() => dispatch(clearCart())}>Clear the cart</button>

    </main>
  )
}

export default Cart;