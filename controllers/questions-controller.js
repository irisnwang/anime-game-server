import * as questionsDao from "../database/questions/questions-dao.js"

const questionController = (app) => {
  app.get('/api/questions', findAllQuestions)
  app.get('/api/questions/:qid', findQuestionByID)
}

const findAllQuestions = async (req, res) => {
  const qs = await questionsDao.findAllQuestions()
  res.json(qs)
}

const findQuestionByID = async (req, res) => {
  const questionID = parseInt(req.params.qid)
  const question = await questionsDao.findQuestionByID(questionID)
  res.json(question)
}

export default questionController;