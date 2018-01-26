import data from '../data/data.json'
import answers from '../data/answers.json'


export const SET_PICKED_ANSWER = 'SET_PICKED_ANSWER'

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const REQUEST_ANSWERS = 'REQUEST_ANSWERS'
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'


// export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'

export const setPickedAnswer = (index, answer) => ({
  type: SET_PICKED_ANSWER,
  index: index,
  text: answer
})

// export const getCategoriesList = (index) => { 
// 	return (dispatch, getState) => {
// 	  // const categories = Object.values(getState().categoriesList)[0].categories
// 	  // const categoriesStyleList = categories.map((category, i) => {return {id: category.title, selected: (category.title===index ) ? true : false }})
// 	  // dispatch(styleCategories(categoriesStyleList))
// 	}
// }

export const requestQuestions = subreddit => ({
  type: REQUEST_QUESTIONS,
})

export const receiveQuestions = (data) => ({
  type: RECEIVE_QUESTIONS,
  questionsItems: Object.keys(data).map(child => data[child]),
})


export const fetchQuestions = () => dispatch => {
  // dispatch(requestQuestions())
  return fetch(data)
  .then(console.log(data))
  .then(console.log(Object.keys(data)))
  .then(console.log(Object.keys(data).map(child => data[child])))
  .then(dispatch(receiveQuestions(data)))
}


//*************

export const requestAnswers = subreddit => ({
  type: REQUEST_ANSWERS,
})

export const receiveAnswers = (data) => ({
  type: RECEIVE_ANSWERS,
  answersItems: Object.keys(data).map(child => data[child]),
})


export const fetchAnswers = () => dispatch => {
  // dispatch(requestAnswers())
  return fetch(answers)
  .then(console.log('1', answers))
  .then(console.log('2', Object.keys(answers)))
  .then(console.log('3', Object.keys(answers).map(child => answers[child].answer)))
  .then(dispatch(receiveAnswers(answers)))
}
