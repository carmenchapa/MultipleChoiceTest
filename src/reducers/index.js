import { combineReducers } from 'redux'
import {
  // SELECT_CATEGORY, STYLE_CATEGORIES,
  SET_PICKED_ANSWER, 

  REQUEST_CATEGORIES, RECEIVE_CATEGORIES,
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


const categories = (state = {
  categories: [],
  // styles: [],
}, action) => {
  switch (action.type) {

    case REQUEST_CATEGORIES:
      return {
        ...state,
      }
    // case SET_PICKED_ANSWER:

    case RECEIVE_CATEGORIES:
    // case STYLE_CATEGORIES:

      return {
        ...state,
        categories: action.categoriesItems,
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
      default:
      return state
  }
}

const categoriesList = (state = { }, action) => {
  switch (action.type) {
  	// case SELECT_CATEGORY:
    case RECEIVE_CATEGORIES:
    case REQUEST_CATEGORIES:
      return {
        ...state,
        [action.categories]: categories(state[action.categories], action)
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  questionarie,
  categoriesList,
})

export default rootReducer