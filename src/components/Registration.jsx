import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be at least 6 characters";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Must include at least one uppercase letter";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Must include at least one number";
    }

    return errors;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validate,
      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          const response = await fetch(
            "https://optimist-dev-backend.onrender.com/user/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();

          if (response.ok) {
            action.resetForm();
            setLoading(false);
            navigate("/login");
          } else {
            alert(data.message || "Registration failed");
          }
        } catch (error) {
          console.error("Registration error:", error);
          alert("An error occurred");
        }
      },
    });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 h-[100vh]">
        <h3 className="mb-2 text-3xl font-semibold mt-7 ">Sign up</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-[90%] sm:w-[50%] md:w-[23%] ">
          <div className="flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-2 mt-2 border border-black rounded-lg "
            />
            {touched.name && errors.name ? (
              <div className="text-red-500">{errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-2 mt-2 border border-black rounded-lg "
            />
            {touched.email && errors.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-2 mt-2 border border-black rounded-lg "
            />
            {touched.password && errors.password ? (
              <div className="text-red-500">{errors.password}</div>
            ) : null}
          </div>

          <Button
            text={loading ? "Registering..." : "Register"}
            px="32px"
            py="8px"
          />
          <p className="text-sm text-center text-gray-400">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Registration;
