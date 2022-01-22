/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Button from "../components/Button";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
  return (
    <div className="bg-white rounded-md drop-shadow-xl overflow-hidden w-full h-full sm:m-8 xl:w-4/5 sm:h-90vh my-auto flex items-center justify-center md:justify-between">
      <div className="w-full sm:w-4/5 lg:w-1/2 sm:flex flex-col justify-center items-center px-4 sm:px-0">
        <div className="lg:w-8/12 2xl:w-7/12">
          <span className="hidden md:inline text-primary text-sm font-black">
            CONTROLLER
          </span>
          <div className="md:hidden text-primary text-2xl font-black w-8 h-8 drop-shadow-md border border-[#e7e7e7] rounded-full flex justify-center items-center">
            C
          </div>

          <div className="my-6 2xl:my-8">
            <h1>Welcome</h1>
            <h5 className="text-secondary font-medium whitespace-normal">
              Welcome back! Enter your credentials
            </h5>
          </div>
          <LoginForm />
          <div className="flex justify-between my-5">
            <div className="flex items-center ">
              <span className="w-4 h-4 border border-secondary rounded-sm mr-1" />
              <p className="font-bold">Remember me</p>
            </div>
            <p className="font-bold">Forgot password?</p>
          </div>
          <Button primary>Sign in</Button>
          <p className="text-center text-secondary mt-5">
            Don't have an account? <span className="text-primary">Sign up</span>
          </p>
        </div>
      </div>
      <div className="hidden  bg-[url('../assets/images/money.jpg')] bg-center bg-no-repeat bg-cover w-1/2 h-full md:grid grid-row-3">
        <div className="bg-black/60 text-white row-start-3 m-8 h-3/5 2xl:h-5/6 border border-secondary p-8 grid justify-items-stretch">
          <h1 className="self-center ">
            <span className="text-primary">Action</span> is the foundational key
            to all success.
          </h1>
          <span className="text-left text-3xl self-center">
            – Pablo Picasso
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
