const EmptyCart = () => {
  return (
    <div className="flex items-center text-center flex-col min-h-[50vh] justify-center gap-y-3 sm:w-[70%] mx-auto border-b">
      <div>
        <img
          src="https://www.jiomart.com/msassets/images/empty-cart.svg"
          alt=""
        />
      </div>
      <p className="font-extrabold">Your Cart is Empty!</p>
      <div className="text-xs">
        <p>It's a nice day to buy the items you saved for later!</p>
        <p>or Continue Shopping</p>
      </div>
    </div>
  );
};

export default EmptyCart;
