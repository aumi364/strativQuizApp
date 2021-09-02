import React, { useState, useContext } from "react";
import "./Answer.css";
import { useForm } from "react-hook-form";
import useService from "Services/useService";
import { AiOutlineEdit } from "react-icons/ai";
import AuthContext from "Context/AuthContext";
const answerFormatter = (answers) => {
  //format answer for latest answer and previous answer
  const tempArr = [...answers];
  const latestAnswer = tempArr.pop();
  return { latestAnswer, previousAnswers: tempArr.join(", ") };
};
const Answer = ({ children, questionObj, toggle, setToggle }) => {
  const {
    status: {
      authStatus: { isAdmin },
    },
  } = useContext(AuthContext); //get admin role to give permission for editing and answering answer

  const { addAnswer } = useService();
  const [edit, setEdit] = useState(false);
  const { answers } = questionObj || []; //answers from the questioObj to add or edit answer
  const { latestAnswer, previousAnswers } =
    (answers.length > 0 && answerFormatter(answers)) || {};

  const { register, handleSubmit } = useForm();
  const editHandler = () => {
    setEdit(true);
  };
  const onSubmit = (data) => {
    setEdit(false);
    addAnswer(questionObj.id, data.answer);
    setToggle(!toggle); // update the state of parent component for changes
  };
  return (
    <div className="answer">
      {children}
      {(edit || (questionObj && answers.length) < 1) && !isAdmin ? (
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
            <div>{`answer : ${latestAnswer || "No Answer yet"}`}</div>
            {previousAnswers && (
              <div className="previous-answer">{previousAnswers}</div>
            )}
          </div>
          {!isAdmin && (
            <div className="answer-edit">
              <AiOutlineEdit onClick={editHandler} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Answer;
