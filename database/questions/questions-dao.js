import questionsModel from "./questions-model.js";
export const findAllQuestions = () => {
  return questionsModel.find();
}

export const findQuestionByID = (qid) => {
  return questionsModel.findOne({ id: qid })
}