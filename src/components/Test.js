// import React from 'react'
import React, { Component } from 'react'


const questionStyle = {
	padding: '15px',
	listStyleType: 'none',
	fontFamily: 'Arial, Helvetica, sans-serif'
}

const feedbackStyle = {
	
}

const nonselected = {

	height: '29px',
   	overflow: 'hidden',
  	width: '300px',
  	border: 'none',
  	marginTop: '15px',

	display: 'block',
	padding: '60px',
	backgroundColor: '#e0f2f1'
}

const correct = {
	...nonselected,
	backgroundColor: '#aed581'
}

const wrong = {
	...nonselected,
	backgroundColor: '#ff7043'
}

	
class Test extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showFeedback : false,
			score: 0
		}
		this.submit = this.submit.bind(this)

	}

	getFeedback = () => {
		//  setTimeout(console.log(this.props.answers), 10000) 
			console.log(this.props.answers)
		  
		//   const score = this.props.answers.map((item, i) => this.props.answers[i].i === 'correct' ? 1 : 0)
		  this.setState((prevState, props) => {
			return {
				score: 'score',
				showFeedback : true};
		  })
	  
	}


	submit() {
	console.log(this.props)

	this.props.submit()
	this.getFeedback()
	
	}

	handleChange(event) {
		console.log(event.target.value)
	}

	render() {
		console.log(this.props)
		console.log(this.props.answers)
		console.log(this.props.answers[1])
		const data = this.props.data.questions
		// const
		return(
		<div>
			<ul>
			{data.map((item, i) =>
			
			// console.log(this.props.answers[i])
				<li key={i} style={questionStyle} >{item.question}
					<select name={i} onChange={this.props.getAnswer} style={this.props.answers[i] && this.props.answers[i].i === 'correct' ? correct : this.props.answers[i] && this.props.answers[i].i === 'wrong' ? wrong : nonselected}>
						{item.options.map((opt, i) =>
							<option key={i} value={opt}>{opt}</option>
						)}
					</select>
				</li>
			)}
			</ul>
		<button onClick= {() => this.props.submit() }>submit</button>
		<button onClick= { this.submit }>submit</button>
		{this.state.showFeedback ?
           <Feedback score= {Object.values(this.props.answers).reduce((a, b, i) =>  {return this.props.answers[i] && this.props.answers[i].i === 'correct' ? a + 1 : a },0)} /> :
           null
          }

		
		</div>
		)
	}
}

const Feedback = (props) => <p>Your total score is {props.score}</p>


export default Test
