import data from '../data/data.json'
import answers from '../data/answers.json'


export const SET_PICKED_ANSWER = 'SET_PICKED_ANSWER'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'


export const setPickedAnswer = (index, answer) => ({
  type: SET_PICKED_ANSWER,
  index: index,
  text: answer
})


export const receiveQuestions = (data) => ({
  type: RECEIVE_QUESTIONS,
  questionsItems: Object.keys(data).map(child => data[child]),
})


function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

export const fetchQuestions = () => dispatch => {
  return fetch(data)
  .then(handleErrors)
  .then(dispatch(receiveQuestions(data)))
  .catch(error => console.log(error) )
}

//*************


export const receiveAnswers = (answers) => ({
  type: RECEIVE_ANSWERS,
  answersItems: Object.keys(answers).map(child => answers[child]),
})


export const fetchAnswers = () => dispatch => {
  return fetch(answers)
  .then(handleErrors)  
  .then(dispatch(receiveAnswers(answers)))
  .catch(error => console.log(error) )
}
