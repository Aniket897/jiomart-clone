import { categories } from "../../data";

const Categories = () => {
  return (
    <div className="flex items-center justify-center bg-[#0C5273] h-[40px] overflow-y-hidden text-white">
      <div className="flex items-center gap-x-9 text-[13px] w-fit overflow-x-scroll px-3 noscrollbar">
        {categories.map((item, index) => (
          <div key={index} className="cursor-pointer">
            {/* {item} */}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
