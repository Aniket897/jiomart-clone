const Error = () => {
  const handleTryAgain = () => {
    window.location.reload();
  };
  return (
    <div className="h-full flex items-center justify-center flex-col gap-y-2">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/14005/14005527.png"
          alt=""
        />
      </div>
      <p>Somthing went wrong please try again</p>
      <button
        onClick={handleTryAgain}
        className="bg-green-700 text-white p-2 rounded-md"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
