const ProdcutCard = ({ product }) => {
  return (
    <div className=" border p-2 shadow-sm mt-4">
      <div className="w-full h-[180px] flex items-center justify-center">
        <img
          className="rounded-md max-h-full max-h-full"
          loading="lazy"
          src={product.image}
          alt=""
        />
      </div>
      <div className="px-3 flex flex-col gap-y-1 text-[14px] mt-1">
        <p className="text-xs">{product.title}</p>
        <p>{product.price}.00</p>
        <div className="flex items-center justify-between rounded-full font-extrabold text-green-700 border px-3 py-1 border-gray-400 cursor-pointer">
          <p>Add</p>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default ProdcutCard;
