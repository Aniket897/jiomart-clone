const FlexBanner = ({ images }) => {
  return (
    <div className="w-[99%] mx-auto rounded-md overflow-hidden flex items-center gap-x-2 mt-2 max-sm:flex-col max-sm:gap-y-2">
      {images.map((item, index) => (
        <img
          key={index}
          loading="lazy"
          className="sm:w-[50%] rounded-md"
          src={item}
          alt=""
        />
      ))}
    </div>
  );
};

export default FlexBanner;
