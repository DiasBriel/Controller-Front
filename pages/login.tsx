import { NextPage } from "next";
import Button from "../components/Button";

const Login: NextPage = () => {
  return (
    <div className="bg-white w-full m-8 xl:w-4/5 h-full flex items-center justify-between">
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
      <div>imagem</div>
    </div>
  );
};

export default Login;
