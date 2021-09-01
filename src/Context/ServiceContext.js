import React, { useState, createContext, useEffect } from "react";
import { DummyQuestions } from "Pages/Utils/DummyQuestions";
const ServiceContext = createContext(null);
export const ServiceProvider = ({ children }) => {
  const [data, setData] = useState();
  //const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (DummyQuestions) {
      const localData = localStorage.getItem("data");
      if (
        localData !== "undefined" &&
        localData !== null &&
        localData !== undefined
      ) {
        setData(JSON.parse(localData));
      } else {
        localStorage.setItem("data", JSON.stringify(DummyQuestions));
        window.location.reload();
      }
    }
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        questionsData: { data: data, setData: setData },
        // toggler: setToggle,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
export default ServiceContext;
