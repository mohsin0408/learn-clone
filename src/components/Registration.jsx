import React from "react";
import Button from "./Button";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
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
        action.resetForm();
      },
    });
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
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
            />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </div>
          <label className="flex gap-2">
            <input id="check" name="check" type="checkbox" />
            <p>
              I agree to receive promotional and instructional emails from
              Academind
            </p>
          </label>
          <Button text="Send Code" />
        </form>
      </div>
    </>
  );
};
export default Registration;
