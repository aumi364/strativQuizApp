import React from "react";
import { DummyQuestions } from "Pages/Utils/DummyQuestions";
import Answer from "./Answer";
const Answers = () => {
  const editHandler = (e) => {
    return (e) => {
      console.log("edit");
    };
  };
  const deleteHandler = (e) => {
    return (e) => {
      console.log("delete");
    };
  };
  const questions = DummyQuestions.map((element) => {
    const { question, id } = element;
    return (
      <Answer
        key={id}
        editHandler={editHandler(id)}
        deleteHandler={deleteHandler(id)}
      >
        {question}
      </Answer>
    );
  });
  return <div>{questions}</div>;
};

export default Answers;
