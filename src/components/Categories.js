// import React from 'react'
import React, { Component } from 'react'

// import PropTypes from 'prop-types'


const questionStyle = {
	padding: '15px',
	listStyleType: 'none',
	fontFamily: 'Arial, Helvetica, sans-serif'
}

const nonselected = {

	height: '29px',
   	overflow: 'hidden',
  	width: '300px',
  	border: 'none',
  	marginTop: '15px',

	display: 'block',
	padding: '60px',
	backgroundColor: '#e0f2f1',
 //   	WebkitApearance: 'none',
 // 	WebkitBorderRadius: '50px',
 //   	MozBorderRadius: '50px',
 //   	borderRadius: '50px',

}


const correct = {
	...nonselected,
	backgroundColor: '#aed581'
}

const wrong = {
	...nonselected,
	backgroundColor: '#ff7043'
}


// const Categories = ({...props}) => {

	

class Categories extends Component {
constructor(props) {
	super(props)
	// this.state = this.props.questions.questions.map((item, i) => {return {id: i, isCorrect: false}}
	console.log(this.state)
	this.submit = this.submit.bind(this)
}


componentWillReceiveProps(nextProps){

this.setState((prevState, props) => {
	console.log(props.data.questions.map((item, i) => {return {state: false}}))
		  return props.data.questions.map((item, i) => {return {state: 'nonselected'}})

		  // return props.products.map((products, i) => {return {id: i, isVisible: false}})
		});
console.log(this.state)
}

submit() {
	console.log(this.state)
}




handleChange(event) {
	console.log(event.target.value)
	// this.setState({value: event.target.value});
}

render() {
	console.log(this.props.data.questions)
	const data = this.props.data.questions
	return(
	<div>
		<ul>
		{data.map((item, i) =>
			<li key={i} style={questionStyle} >{item.question}
				{/*<select onChange={this.handleChange} >*/}
				<select name={i} onChange={this.props.getAnswer} style={this.state[i].state === 'nonselected' ? nonselected : this.state[i].state === 'correct' ? correct: wrong}>
					{item.options.map((opt, i) =>
						<option key={i} value={opt}>{opt}</option>
					)}
				</select>
			</li>
		)}
		</ul>
	<button onClick= {() => this.props.submit() }>submit</button>
	<button onClick= { this.submit }>submit</button>
	</div>
	)
}
}
// Categories.propTypes = {
//   // categories: PropTypes.array.isRequired,
//   // styles: PropTypes.array.isRequired

// }
export default Categories
