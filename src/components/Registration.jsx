import React from "react";
import Button from "./Button";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "*Required*";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "*Required*";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
      },
      validate,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        existingUsers.push(values);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        action.resetForm();
      },
    });
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8">
        <h3 className="mb-2 text-3xl font-semibold mt-7 ">Sign up</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-[90%] sm:w-[50%] md:w-[23%] ">
          <div className="flex flex-col">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="your name"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[350px] p-2 mt-2 border border-black rounded-lg "
            />
            {touched.fullName && errors.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="you@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[350px] p-2 mt-2 border border-black rounded-lg "
            />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </div>
          <label className="flex gap-2">
            <input id="check" name="check" type="checkbox" className="w-8" />
            <p>
              I agree to receive promotional and instructional emails from
              Academind
            </p>
          </label>
          <p className="text-sm text-gray-400">
            By signing up, I agree to Academind's Privacy & Terms and
            Teachable's Privacy 7 Terms
          </p>
          <Button text="Send Code" px="32px" py="8px" />
          <p className="text-sm text-center text-gray-400">
            Already have an account? <Link to="/Login">Log in</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Registration;
