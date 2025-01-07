import React from "react";
import Button from "./Button";
const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6">
        <h3>Log in</h3>
        <form>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="you@email.com"
            />
          </div>
          <label className="flex gap-2">
            <input id="check" name="check" type="checkbox" />
            <p>Remember me</p>
          </label>
          <Button text="Log in" />
        </form>
      </div>
    </>
  );
};
export default Login;
