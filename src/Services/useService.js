const useService = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const getQuestions = () => {
    return data;
  };
  const editQuestion = (id, question) => {
    const index = data.findIndex((question) => question.id === id);
    data[index].question = question;
    localStorage.setItem("data", JSON.stringify(data));
  };
  const deleteQuestion = (id) => {
    const index = data.findIndex((question) => question.id === id);
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
  };
  const addAnswer = (questionId, answer) => {
    const index = data.findIndex((question) => question.id === questionId);
    data[index].answers.push(answer);
    localStorage.setItem("data", JSON.stringify(data));
  };
  const addQuestion = (question) => {
    console.log(question);
    data.push({ id: data.length + 1, question: question, answers: [] });
    localStorage.setItem("data", JSON.stringify(data));
  };

  return {
    getQuestions,
    editQuestion,
    deleteQuestion,
    addAnswer,
    addQuestion,
  };
};
export default useService;
