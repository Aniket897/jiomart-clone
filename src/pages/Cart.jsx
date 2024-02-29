import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  return (
    <div className="min-h-screen">
      <div className="sm:w-[80%] mx-auto py-7">
        <p className="text-2xl font-extrabold">My Cart</p>
      </div>
      <EmptyCart />
    </div>
  );
};

export default Cart;
