// * Esto es para que funcione el intellisense nada maás

const { response } = require("express");
const { getFirstAnswer } = require("../answers/getFirstAnswer");
// const { getAnswer } = require("../answers/getAnswer");
const { getNextQuestion } = require("../answers/getNextQuestion");
const { getInstantAttentionAnswer } = require("../answers/getInstantAttentionAnswer");

// res=response to get intellisense
const getAnswer1 = async (req, res = response) => {
  // TODO: try catch
  const { question } = req.body;
  const prediction = await getFirstAnswer(question);
  //TODO : si es consulta inmediata informar que habrá siguiente pregunta al front  ?
  const nextQuestion = getNextQuestion(prediction.prediction);

  // * if errors array is empty
  res.status(200).json({
    ok: true,
    question,
    prediction,
    nextQuestion,
  });
};

const getAnswer2 = async (req, res = response) => {
  const { question } = req.body;
  const prediction = await getInstantAttentionAnswer(question);
  // * if errors array is empty
  const nextQuestion = getNextQuestion(prediction.prediction);
  res.status(200).json({
    ok: true,
    question,
    prediction,
    nextQuestion,
  });
};

module.exports = {
  getAnswer1,
  getAnswer2,
};
