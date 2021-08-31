import React from "react";
import Modal from "Component/modal/Modal";
import { useForm } from "react-hook-form";
const EditModalQuestion = ({ closeModal, editQuestion }) => {
  console.log(editQuestion);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="question"
            defaultValue={editQuestion.question}
            {...register("question", { required: true })}
          />
          {errors.email && (
            <span className="text-warning">
              <small>Email is Required</small>
            </span>
          )}
        </div>
        <div className="text-center">
          <button className="btn">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModalQuestion;
