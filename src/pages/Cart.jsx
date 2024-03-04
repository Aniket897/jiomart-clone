import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import { useCart } from "../contexts/cartContext";

const Cart = () => {
  const cart = useCart();
  return (
    <div className="min-h-screen">
      <div className="sm:w-[80%] mx-auto py-7">
        <p className="text-2xl font-extrabold">My Cart</p>
      </div>
      {cart.items.length === 0 && <EmptyCart />}
      {cart.items.length > 0 && (
        <div className="lg:w-[50%] lg:mx-auto">
          {cart.items.map((item, index) => (
            <div key={index}>
              <CartItem product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
