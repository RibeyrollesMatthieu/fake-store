import { CartButton, CartProductLine, CartProducts, CartWrapper, ClearButton, ImageWrapper, TextWrapper } from "../components/cart/styled";
import { ImageWithErrorHandle } from "../components/image/ImageWithErrorHandle";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { clearCart, removeInstanceOfProduct, removeProduct } from "../redux/features/cart/cartSlice";
import { convertToCentsThenEuros } from "../utils/prices";

const Cart = () => {

  const cart = useAppSelector(cart => cart.cart.content);
  const dispatch = useAppDispatch();

  return (
    <CartWrapper>
      <h1>Your cart</h1>

      <CartProducts>
        {
          cart.products.map(product => (
            <CartProductLine key={product.product.title}>
              <ImageWrapper>
                <ImageWithErrorHandle alt={product.product.title} layout='fill' objectFit='contain' src={product.product.image} />
              </ImageWrapper>

              <TextWrapper>{product.product.title} (x{product.quantity}): {convertToCentsThenEuros(product.quantity * product.product.price)}€</TextWrapper>
              
              <CartButton onClick={() => dispatch(removeInstanceOfProduct(product))}>Remove one</CartButton>
              <CartButton onClick={() => dispatch(removeProduct(product))} >Remove all</CartButton>
            </CartProductLine>
          ))
        }
      </CartProducts>

      <div>
        &#8212;&nbsp;&nbsp;Total: {cart.total}€&nbsp;&nbsp;&#8212; <br />
        &#8212;&nbsp;&nbsp;{cart.quantity} products&nbsp;&nbsp;&#8212;
      </div>

      <ClearButton onClick={() => dispatch(clearCart())}>Clear the cart</ClearButton>

    </CartWrapper>
  )
}

export default Cart;