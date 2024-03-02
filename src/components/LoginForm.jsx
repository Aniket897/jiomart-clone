const LoginForm = () => {
  return (
    <form action="" className="flex flex-col gap-y-9 min-h-[50vh] flex-1">
      <div>
        <h1 className="font-extrabold text-3xl">Sign In To JioMart</h1>
        <p>to access your Addresses, Orders & Wishlist.</p>
      </div>
      <div className="flex-1 border-b-2 w-full">
        <span>+91</span>
        <input type="number" className="border-b-black border-b pl-4 ml-3" />
      </div>
      <div>
        <button className="w-full rounded-md bg-blue-500 text-white py-3">
          Get OTP
        </button>
        <p className="text-xs mt-4">
          By continuing, you agree to our Terms of Service and Privacy & Legal
          Policy
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
