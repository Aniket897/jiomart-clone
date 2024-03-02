import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-[90vh] sm:w-[80vw] sm:mx-auto flex justify-between items-center gap-x-9 max-md:flex-col max-sm:px-4 max-md:gap-y-4">
      <div className="flex-1">
        <img
          src="https://www.jiomart.com/images/cms/wysiwyg/cms/1677147547_pp.png"
          alt=""
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
