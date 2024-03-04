import { useCart } from "../contexts/cartContext";

const CartItem = ({ product }) => {
  const cart = useCart();

  const removeFromCart = () => {
    cart.removeItem(product);
  };
  return (
    <div className="flex gap-x-3 border p-4 rounded-md max-md:flex-col">
      <div className="w-[200px] h-[200px] flex items-center justify-center">
        <img className="max-w-full max-h-full" src={product.image} alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-y-2">
        <div>
          <p className="text-2xl font-extrabold">{product.title}</p>
          <p className="text-xs">{product.description}</p>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-green-700">
            ₹ {product.price}
          </h1>
        </div>
        <button
          className="p-2 w-full text-white bg-green-700 rounded-lg"
          onClick={removeFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
