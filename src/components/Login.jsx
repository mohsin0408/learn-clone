import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://optimist-dev-backend.onrender.com/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data.user.name);

      if (response.ok) {
        setLoading(false);
        navigate("/Home");
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.user.name,
            password: data.user.password,
          })
        );
      } else {
        alert(data.message || "Login failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 py-8 h-[100vh]">
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
              className="px-4 py-2 mt-2 border border-black rounded-lg "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="px-4 py-2 mt-2 border border-black rounded-lg "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            text={loading ? "Logging in..." : "Log in"}
            px="32px"
            py="8px"
            rounded="lg"
          />
          <p className="p-4 text-sm text-center text-gray-400 ">
            Doesn't have an Account? <Link to="/">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
