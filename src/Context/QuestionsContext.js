import React, { createContext, useEffect } from "react";

const QuestionsContext = createContext(null);
export const QuestionsProvider = ({ children, toggler }) => {
  return (
    <QuestionsContext.Provider value={toggler}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
