import React from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import useSignIn from "./useSignIn";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { checkAuth, errors: authError } = useSignIn();

  const onSubmit = (data) => {
    console.log(data);
    checkAuth(data);
  };
  return (
    <div className="SignInContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            className="form-control"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-warning">
              <small>Email is Required</small>
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-warning">
              <small>Password is Required </small>
            </span>
          )}
        </div>
        {authError && <div className="text-warning">{authError}</div>}
        <div className="text-center">
          <button className="btn cbtn">login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
