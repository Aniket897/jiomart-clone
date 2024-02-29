const IconButton = ({ icon }) => {
  return (
    <button className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#0C5273] rounded-full cursor-pointer duration-500">
      {icon}
    </button>
  );
};

export default IconButton;
