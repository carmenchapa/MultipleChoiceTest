import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchQuestions, setPickedAnswer, fetchAnswers } from '../actions'

import Test from '../components/Test'

class App extends Component {
  static propTypes = {
    // categories: PropTypes.array.isRequired,
    // dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
    // dispatch(fetchProducts())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      const { dispatch } = nextProps
      dispatch(fetchQuestions())
      // dispatch(fetchProducts())
    }

  console.log(this.props.answers)
    
  }

  getAnswer = (event) => {
    // console.log('inAnswer')
    console.log(this.props.answers)
    // console.log(event.target.name)
    const index = event.target.name
    const answer = event.target.value
    this.props.dispatch(setPickedAnswer(index, answer))
  }

  submit = () => {
    console.log('inSubmit')
    // this.props.dispatch(selectCategory(nextCategory))
    this.props.dispatch(fetchAnswers())
  }

  render() {
    return (
      <div>
          <Test data={this.props}  getAnswer={this.getAnswer} submit={this.submit} answers={this.props.answers} />
      </div>
    )
  }
}



const mapStateToProps = state => {

  
  const { some, questionsList, questionarie } = state

  console.log(questionsList)
  console.log(questionarie)
// console.log('category', category )
  // const { category, categoriesList, styledCategoriesList } = state
  const {
    questions
  } = questionsList[some] || {
    questions: []
  }

  // const {
  //   answers 
  // } = questionarie[some] || {
  //   answers: []
  // }

  const answers = questionarie

  return {
    questions,
    answers
  }
}

// console.log(mapStateToProps())

export default connect(mapStateToProps)(App)
