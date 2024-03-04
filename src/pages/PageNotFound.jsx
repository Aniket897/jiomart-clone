import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-[90vh] flex flex-col gap-y-5 items-center justify-center">
      <div className="">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8281/8281994.png"
          alt=""
        />
      </div>
      <p>Page Not Found</p>
      <Link className="text-blue-500 hover:underline" to={"/"}>
        Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
