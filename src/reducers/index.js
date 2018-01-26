import { combineReducers } from 'redux'
import {
  // SELECT_CATEGORY, STYLE_CATEGORIES,
  SET_PICKED_ANSWER, 

  RECEIVE_QUESTIONS,

   RECEIVE_ANSWERS
} from '../actions'


const questions = (state = { questions: []}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        questions: action.questionsItems,
      }  
    default:
      return state
  }
}

const questionarie = (state = {}, action) => {
  switch (action.type) {
    case SET_PICKED_ANSWER:
      return {
        ...state,
        [action.index]: action.text
      }

    case RECEIVE_ANSWERS:   
      const newState = action.answersItems.map((item, i) => { 
        return state[i] == item.answer ? { i : 'correct' } : {i : 'wrong'}
      })
    console.log(newState)
      return {
        ...state,
        ...newState
      }

    // return {
    //   ...state,
    //   [action.answers]: answers(state[action.answers], action)
    // }

    default:
      return state
  }
}

const questionsList = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        [action.questions]: questions(state[action.questions], action)
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  questionarie,
  questionsList,
})

export default rootReducer