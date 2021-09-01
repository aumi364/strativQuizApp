import React, { useContext } from "react";
import Modal from "Component/modal/Modal";
import { useForm } from "react-hook-form";
import QuestionsContext from "Context/QuestionsContext";
import useService from "Services/useService";
import FormQuestion from "Pages/Questions/FormQuestion";
const AddModalQuestion = ({ closeModal, questionObj }) => {
  const { addQuestion } = useService();
  const { toggle, setToggle } = useContext(QuestionsContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addQuestion(data.question);
    setToggle(!toggle);
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <FormQuestion
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        placeHolder={"Your Question"}
      />
    </Modal>
  );
};

export default AddModalQuestion;
