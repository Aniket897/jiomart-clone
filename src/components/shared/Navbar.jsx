import { IoIosList } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import IconButton from "../ui/IconButton";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

const Navbar = () => {
  const cart = useCart();
  return (
    <div className="sticky top-0 left-0 w-full z-20">
      <div className="flex items-center justify-center py-4 bg-[#0078AD] text-white">
        <div className="w-[90%] sm:w-[80%] flex items-center justify-between">
          <div className="flex items-center gap-x-2 md:gap-x-8">
            <IconButton icon={<BsList size={25} />} />
            <Link to={"/"} className="sm:text-3xl font-extrabold">
              JioMart
            </Link>
            <div className=" max-lg:hidden text-xs hover:bg-[#0C5273] rounded-lg p-2 px-4 cursor-pointer duration-500">
              <p>Deliver to Mumbai 400001</p>
            </div>
          </div>
          <div className="flex items-center gap-x-9">
            {/* Searchbar */}
            <div className="hidden md:flex items-center bg-white rounded-full text-black gap-x-2 overflow-hidden h-[40px] px-3">
              <CiSearch size={25} />
              <input
                type="text"
                className="flex-1 bg-transparent p-3 outline-none"
                placeholder="Search JioMart"
              />
              <IoIosList size={25} />
            </div>
            <div className="flex items-center gap-x-3">
              <div className="md:hidden">
                <IconButton icon={<CiSearch size={20} />} />
              </div>
              <Link to={"/cart"} className="relative">
                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs absolute right-0">
                  {cart.items.length}
                </span>
                <IconButton icon={<FaCartShopping size={20} />} />
              </Link>
              <IconButton icon={<FaUser size={20} />} />
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
