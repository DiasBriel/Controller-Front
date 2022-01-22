import { NextPage } from "next";
import Button from "../components/Button";

const Login: NextPage = () => {
  return (
    <div className="bg-white border border-grey-500 rounded-md drop-shadow-2xl overflow-hidden w-full m-8 xl:w-4/5 h-85vh flex items-center justify-between">
      <div className="flex justify-center w-1/2">
        <div>
          <span className="text-primary font-black">CONTROLLER</span>
          <h1>Welcome Back</h1>
          <h5 className="text-secondary font-medium">
            Welcome back! Enter your details
          </h5>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="w-4 h-4 border border-secondary rounded-sm mr-1" />
              <p>Remember me</p>
            </div>
            <p>Forgot password?</p>
          </div>
          <Button primary>Sign in</Button>
          <p className="text-center text-secondary">
            Don’t have an account? <span className="text-primary">Sign up</span>
          </p>
        </div>
      </div>
      <div className="bg-[url('../assets/images/money.jpg')] bg-center bg-no-repeat bg-cover w-1/2 h-full grid grid-row-3">
        <div className="bg-black/40 text-white row-start-3 m-8 h-5/6 border border-secondary p-8 grid justify-items-stretch">
          <h1 className="self-center">
            <span className="text-primary ">Action</span> is the foundational
            key to all success.
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
