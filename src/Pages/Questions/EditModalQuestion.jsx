import React, { useContext } from "react";
import Modal from "Component/modal/Modal";
import { useForm } from "react-hook-form";
import QuestionsContext from "Context/QuestionsContext";
import useService from "Services/useService";
import FormQuestion from "Pages/Questions/FormQuestion";
const EditModalQuestion = ({ closeModal, questionObj }) => {
  const { editQuestion } = useService();
  const { toggle, setToggle } = useContext(QuestionsContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    editQuestion(questionObj.id, data.question);
    setToggle(!toggle);
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <FormQuestion
        prevValues={questionObj}
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default EditModalQuestion;
