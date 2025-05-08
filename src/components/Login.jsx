import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   const user = storedUsers.find((user) => user.email === email);
  //   if (user) {
  //     navigate("/Home");
  //   } else {
  //     alert("invalid");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://optimist-dev-backend.onrender.com/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        // Optionally store token: localStorage.setItem("token", data.token)
        navigate("/Home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 py-8 ">
        <h3 className="text-3xl font-semibold my-7 ">Log in</h3>
        <form
          className="flex flex-col gap-5 w-[90%] sm:w-[50%] md:w-[23%]"
          onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="you@email.com"
              className="w-[350px] px-4 py-2 mt-2 border border-black rounded-lg "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="flex gap-2 py-4 ">
            <input id="check" name="check" type="checkbox" />
            <p>Remember me</p>
          </div> */}
          <Button text="Log in" px="32px" py="8px" rounded="lg" />
          <p className="p-4 text-sm text-center text-gray-400 ">
            Doesn't have an Account? <Link to="/">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
