import React, { useState } from "react";
import { DummyQuestions } from "Pages/Utils/DummyQuestions";
import Question from "./Question";
import useModal from "Component/modal/useModal";

import EditModalQuestion from "Pages/Questions/EditModalQuestion";
const Questions = () => {
  const [editModal, openEditModal, closeEditModal] = useModal();
  const [editQuestion, setEditQuestion] = useState();
  const editHandler = (question) => {
    return (e) => {
      setEditQuestion(question);
      openEditModal();
    };
  };
  const deleteHandler = (id) => {
    return (e) => {
      console.log("delete");
    };
  };
  const questions = DummyQuestions.map((element, index) => {
    index++;

    return (
      <Question
        key={element.id}
        editHandler={editHandler(element)}
        deleteHandler={deleteHandler(element)}
      >
        {`${index}. ${element.question}`}
      </Question>
    );
  });
  return (
    <div>
      {questions}
      {editModal && (
        <EditModalQuestion
          closeModal={closeEditModal}
          editQuestion={editQuestion}
        />
      )}
    </div>
  );
};

export default Questions;
