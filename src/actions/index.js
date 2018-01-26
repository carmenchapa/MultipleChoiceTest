import data from '../data/data.json';

export const SET_PICKED_ANSWER = 'SET_PICKED_ANSWER'


export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'


export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'

export const setPickedAnswer = (index, answer) => ({
  type: SET_PICKED_ANSWER,
  index: index,
  text: answer
})

export const getCategoriesList = (index) => { 
	return (dispatch, getState) => {
	  // const categories = Object.values(getState().categoriesList)[0].categories
	  // const categoriesStyleList = categories.map((category, i) => {return {id: category.title, selected: (category.title===index ) ? true : false }})
	  // dispatch(styleCategories(categoriesStyleList))
	}
}

export const requestCategories = subreddit => ({
  type: REQUEST_CATEGORIES,
})

export const receiveCategories = (data) => ({
  type: RECEIVE_CATEGORIES,
  categoriesItems: Object.keys(data).map(child => data[child]),
})


export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return fetch(data)
  .then(console.log(data))
  .then(console.log(Object.keys(data)))
  .then(console.log(Object.keys(data).map(child => data[child])))
  .then(dispatch(receiveCategories(data)))
}
