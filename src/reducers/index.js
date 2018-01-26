import { combineReducers } from 'redux'
import {
  // SELECT_CATEGORY, STYLE_CATEGORIES,
  SET_PICKED_ANSWER, 

  REQUEST_QUESTIONS, RECEIVE_QUESTIONS,

  REQUEST_ANSWERS, RECEIVE_ANSWERS
} from '../actions'

// const questions = (state = {
//   categories: [],
// }, action) => {
//   switch (action.type){
//     case SET_PICKED_ANSWER:
//       return {
//         ...state,
//         categories: action.categoriesItems,
//       }
//       // return state.map(
//       //   (item, index) =>
//       //     action.index === index
//       //       ? { pickedAnswer: action.text }
//       //       : item
//       //   )

//     default:
//       return state
//   }
// }


// const answers

const questions = (state = {
  questions: [],
  // styles: [],
}, action) => {
  switch (action.type) {

    // case REQUEST_QUESTIONS:
    //   return {
    //     ...state,
    //   }
    // case SET_PICKED_ANSWER:

    case RECEIVE_QUESTIONS:
    // case STYLE_CATEGORIES:

      return {
        ...state,
        questions: action.questionsItems,
        // styles: action.categoriesStyles
      }
   
    default:
      return state
  }
}

const questionarie = (state = {}, action) => {
  switch (action.type) {
    case SET_PICKED_ANSWER:
    console.log('in set picked')
    console.log(action.index)
    console.log(typeof(action.text))
      return {
        ...state,

        [action.index]: action.text
      }
      // return state.map(
      //   (item, index) => 
      //     action.index === index
      //       ? { text: action.text }
      //       : item
      //   )

    case RECEIVE_ANSWERS:
    console.log(state)
    console.log(action.index)

      return {
        ...state,
//check here if the state status(response)  match the correct answer, gotten in fetchAnswers. Pass the required parameters
        [action.index]: action.text ? action.text : 'something else'
      }
        // return state.map(
        // (item, index) => 
        //   action.index === index
        //     ? { text: action.text }
        //     : item
        // )
    default:
    return state
  }
}

const questionsList = (state = { }, action) => {
  switch (action.type) {
  	// case SELECT_CATEGORY:
    case RECEIVE_QUESTIONS:
    // case REQUEST_QUESTIONS:
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