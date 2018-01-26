import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, setPickedAnswer, fetchAnswers } from '../actions'

import Test from '../components/Test'

class App extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     showFeedback : false,
  //     score: 0
  //   }
  // }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchQuestions())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      const { dispatch } = nextProps
      dispatch(fetchQuestions())
    }
    console.log(this.props.answers)  
  }

  getAnswer = (event) => {
    const index = event.target.name
    const answer = event.target.value
    this.props.dispatch(setPickedAnswer(index, answer))

    // console.log(this.state.showFeedback)
  }

  // getFeedback = () => {
  // //  setTimeout(console.log(this.props.answers), 10000) 
    
  //   // const score = this.props.answers.map((item, index) => )
  //   this.setState((prevState, props) => {
  //     return {showFeedback : true};
  //   })

  // }

  submit = () => {
    console.log('inSubmit')
    this.props.dispatch(fetchAnswers())
  }

  render() {
    return (
      <div>
          <Test data={this.props}  getAnswer={this.getAnswer} submit={this.submit} answers={this.props.answers} />
          {/* {this.state.showFeedback ?
           <Feedback score= {this.state.score} /> :
           null
          } */}
      </div>
    )
  }
}


// const Feedback = (props) => <p>Your total score is {props.score}</p>


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
