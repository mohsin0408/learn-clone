import React from "react";
import Button from "./Button";
const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 p-6 ">
        <h3 className="text-3xl font-semibold">Log in</h3>
        <form className=" flex-col items-center gap-5 w-[90%] sm:w-[50%] md:w-[23%] ">
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="you@email.com"
              className="w-[310px] p-2 mt-2 border border-black rounded-lg "
            />
          </div>
          <div className="flex gap-2 py-4 ">
            <input id="check" name="check" type="checkbox" />
            <p>Remember me</p>
          </div>
          <Button text="Log in" cla />
          <p className="p-4 text-sm text-center text-gray-400 ">
            Doesn't have an Account? Sign up
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
