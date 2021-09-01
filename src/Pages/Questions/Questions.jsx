import React, { useState, useEffect } from "react";
import Question from "./Question";
import useModal from "Component/modal/useModal";
import useService from "Services/useService";
import EditModalQuestion from "./EditModalQuestion";
import { QuestionsProvider } from "Context/QuestionsContext";
import AddModalQuestion from "./AddModalQuestion";
import "./Questions.css";
const Questions = () => {
  const [editModal, openEditModal, closeEditModal] = useModal();
  const [addModal, openAddModal, closeAddModal] = useModal();
  const [editQuestion, setEditQuestion] = useState();
  const { deleteQuestion, getQuestions } = useService();
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const response = getQuestions();
    setData(response);
  }, [toggle]);

  const editHandler = (question) => {
    return (e) => {
      setEditQuestion(question);
      openEditModal();
    };
  };
  const deleteHandler = (id) => {
    return (e) => {
      deleteQuestion(id);
      setToggle(!toggle);
    };
  };

  const questions = data
    ? data.map((element, index) => {
        index++;

        return (
          <Question
            key={element.id}
            editHandler={editHandler(element)}
            deleteHandler={deleteHandler(element.id)}
          >
            {`${index}. ${element.question}`}
          </Question>
        );
      })
    : [];
  return (
    <div className="questions-container">
      <div className="questions">
        <div className="text-right">
          <button className="btn cbtn" onClick={openAddModal}>
            Add question
          </button>
        </div>
        {questions}
        <QuestionsProvider toggler={{ toggle, setToggle }}>
          {editModal && (
            <EditModalQuestion
              closeModal={closeEditModal}
              questionObj={editQuestion}
            />
          )}
          {addModal && <AddModalQuestion closeModal={closeAddModal} />}
        </QuestionsProvider>
      </div>
    </div>
  );
};

export default Questions;
