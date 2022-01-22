import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <div className="bg-white w-full m-8 xl:w-4/5 h-full flex flex-row items-center justify-between">
      <div className="flex justify-center w-1/2">
        <div>
          <span className="text-primary font-black">CONTROLLER</span>
          <h1>Welcome Back</h1>
          <h5 className="text-subtitle font-medium">
            Welcome back! Enter your details
          </h5>
          <p className="font-semibold">Email</p>
          <p className="font-semibold">Password</p>
        </div>
      </div>
      <div>imagem</div>
    </div>
  );
};

export default Login;
