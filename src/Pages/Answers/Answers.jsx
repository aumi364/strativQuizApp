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
  }, [toggle]);

  const questions = data
    ? data.map((element, index) => {
        index++;
        const { question, id } = element;
        return (
          <Answer
            key={id}
            element={element}
            toggle={toggle}
            setToggle={setToggle}
          >
            {`${index}. ${question}`}
          </Answer>
        );
      })
    : [];
  return <div>{questions}</div>;
};

export default Answers;
