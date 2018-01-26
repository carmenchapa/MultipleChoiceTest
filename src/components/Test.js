// import React from 'react'
import React, { Component } from 'react'

const container = {
	width: '400px',
	margin: 'auto',
	marginTop: '5em',
	display: 'block',
}

const questionStyle = {
	listStyleType: 'none',
	margin: 'auto',
	display:'block',
	fontFamily: 'Arial, Helvetica, sans-serif'
}

const bigText = {
	...questionStyle,
	fontSize: '25px',
	width: '400px',
	display: 'block',
	margin:' auto',
	marginTop: '20px',
	marginBottom: '30px',
	textAlign: 'center'
}

const common = {
	height: '29px',
   	overflow: 'hidden',
	display: 'block',
	margin:'auto',
  	marginTop: '15px',
  	border: 'none',
	outline: 'none',
}

const buttonStyle = {
	...common,
  	width: '100px',
	backgroundColor: '#b0bec5',
	WebkitBorderRadius: '50px',
	MozBorderRadius: '50px',
	borderRadius: '50px'
}

const buttonHover = {
	...buttonStyle,
	backgroundColor: '#90a4ae',
}

const nonselected = {
	...common,
  	width: '400px',
  	marginBottom: '15px',
	padding: '0',
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
			buttonHover: false
		}
		this.submit = this.submit.bind(this)
	}

	getFeedback = () => {		  
	  this.setState((prevState, props) => {
		return {
			showFeedback : true};
	  })	  
	}

	toggleHover = () => {
		  this.setState((prevState, props) => { return { buttonHover : !this.state.buttonHover} })
	}

	submit() {
		this.props.submit()
		this.getFeedback()
	}

	render() {
		const data = this.props.data.questions
		return(
		<div style={container}>
			<p style={bigText}>Multiple Choice Test</p>

			<ul style={{padding: 0}}>
			{data.map((item, i) =>			
				<li key={i} style={questionStyle} >{item.question}
					<select name={i} onChange={this.props.getAnswer} style={this.props.answers[i] && this.props.answers[i].i === 'correct' ? correct : this.props.answers[i] && this.props.answers[i].i === 'wrong' ? wrong : nonselected}>
						{item.options.map((opt, i) =>
							<option key={i} value={opt}>{opt}</option>
						)}
					</select>
				</li>
			)}
			</ul>

		<button style={!this.state.buttonHover ? buttonStyle : buttonHover} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick= { this.submit }>submit</button>

		{this.state.showFeedback ?
           <Feedback score= {Object.values(this.props.answers).reduce((a, b, i) =>  {return this.props.answers[i] && this.props.answers[i].i === 'correct' ? a + 1 : a },0)} /> :
           null
          }
          
		</div>
		)
	}
}

const Feedback = (props) => <p style={bigText}>Your total score is {props.score}</p>


export default Test
