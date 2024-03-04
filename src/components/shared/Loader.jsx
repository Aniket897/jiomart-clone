import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-2">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="text-xs">Loading....</p>
    </div>
  );
};

export default Loader;
