import React, { useState, useEffect } from "react";
import useService from "Services/useService";
import Answer from "./Answer";

const Answers = () => {
  const { getQuestions } = useService();
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const response = getQuestions();
    setData(response);
  }, [toggle]); // track changes for data from child component

  const questions = data
    ? data.map((element, index) => {
        index++;
        const { question, id } = element;
        return (
          <Answer
            key={id}
            questionObj={element}
            toggle={toggle}
            setToggle={setToggle}
          >
            {`${index}. ${question}`}
          </Answer>
        );
      })
    : []; // iterate through questions
  return (
    <div className="c-container">
      <div className="answers">{questions}</div>
    </div>
  );
};

export default Answers;
