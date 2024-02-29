const ProdcutCard = () => {
  return (
    <div className=" border p-2 shadow-sm mt-4">
      <div className="w-full h-[180px]">
        <img
          className="rounded-md h-full w-full object-cover"
          loading="lazy"
          src="https://www.jiomart.com//images/product/original/491934236/clinic-plus-strong-long-health-shampoo-1-l-product-images-o491934236-p590317996-0-202203151906.jpg?im=Resize=(150,150)"
          alt=""
        />
      </div>
      <div className="px-3 flex flex-col gap-y-1 text-[14px] mt-1">
        <p className="text-xs">Lorem ipsum dolor, sit amet consectetur</p>
        <p>782.00</p>
        <div>
          <span>RS 772.00</span>
          <span className="text-green-500">50% OFF</span>
        </div>
        <div className="flex items-center justify-between rounded-full border px-2 border-gray-400 cursor-pointer">
          <p>add</p>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default ProdcutCard;
