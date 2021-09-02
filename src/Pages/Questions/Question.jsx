import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import "./Question.css";
const Question = ({ children, editHandler, deleteHandler }) => {
  return (
    <div className="question">
      <div>{children}</div>
      <div className="icon-group">
        <div className="icon">
          <AiOutlineEdit onClick={editHandler} />
        </div>
        <div className="icon">
          <AiOutlineDelete className="icon-danger" onClick={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default Question;
