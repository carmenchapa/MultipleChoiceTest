import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, setPickedAnswer, fetchAnswers } from '../actions'

import Test from '../components/Test'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      const { dispatch } = nextProps
      dispatch(fetchQuestions())
    }
  }

  getAnswer = (event) => {
    const index = event.target.name
    const answer = event.target.value
    this.props.dispatch(setPickedAnswer(index, answer))
  }

  submit = () => {
    console.log('inSubmit')
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
  const {
    questions
  } = questionsList[some] || {
    questions: []
  }

  const answers = questionarie

  return {
    questions,
    answers
  }
}

export default connect(mapStateToProps)(App)
