import React, { useState } from "react";
import "./Answer.css";
import { useForm } from "react-hook-form";
import useService from "Services/useService";
import { AiOutlineEdit } from "react-icons/ai";
const answerFormatter = (answers) => {
  const tempArr = [...answers];
  const latestAnswer = tempArr.pop();
  return { latestAnswer, previousAnswers: tempArr.join(", ") };
};
const Answer = ({ children, element, toggle, setToggle }) => {
  const { addAnswer } = useService();
  const [edit, setEdit] = useState(false);
  const { answers } = element || [];
  const { latestAnswer, previousAnswers } =
    (answers.length > 0 && answerFormatter(answers)) || {};
  console.log(previousAnswers);
  const { register, handleSubmit } = useForm();
  const editHandler = () => {
    setEdit(true);
  };
  const onSubmit = (data) => {
    setEdit(false);
    addAnswer(element.id, data.answer);
    setToggle(!toggle);
  };
  return (
    <div className="answer">
      {children}
      {edit || (element && answers.length) < 1 ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="answer"
                  placeholder="Answer"
                  {...register(`answer`, { required: true })}
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div>
            <div>{`answer : ${answers[answers.length - 1]}`}</div>
            {previousAnswers && (
              <div className="previous-answer">{previousAnswers}</div>
            )}
          </div>
          <div className="answer-edit">
            <AiOutlineEdit onClick={editHandler} />
          </div>
        </>
      )}
    </div>
  );
};

export default Answer;
