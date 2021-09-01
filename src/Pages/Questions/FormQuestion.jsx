import React from "react";
import { useForm } from "react-hook-form";

const FormQuestion = ({
  prevValues,
  onSubmit,
  handleSubmit,
  register,
  placeHolder,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          id="question"
          placeholder={placeHolder || ""}
          defaultValue={(prevValues && prevValues.question) || ""}
          {...register("question", { required: true })}
        />
      </div>
      <div className="text-center">
        <button className="btn">Submit</button>
      </div>
    </form>
  );
};

export default FormQuestion;
