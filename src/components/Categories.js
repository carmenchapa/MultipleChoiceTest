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

// const submit = () => {
// 	console.log('submited')
// }
// const Categories = ({...props}) => {

	

class Categories extends Component {
constructor(props) {
	super(props)
	this.state = {
			submited: false
	}
}

handleChange(event) {
	console.log(event.target.value)
	// this.setState({value: event.target.value});
}

render() {
	console.log(this.props.questions.categories)
	const data = this.props.questions.categories
	return(
	<div>
		<ul>
		{data.map((item, i) =>
			<li key={i} style={questionStyle} >{item.question}
				{/*<select onChange={this.handleChange} >*/}
				<select name={i} onChange={this.props.getAnswer} style={correct}>
					{item.options.map((opt, i) =>
						<option key={i} value={opt}>{opt}</option>
					)}
				</select>
			</li>
		)}
		</ul>
	<button onClick= {() => this.props.submit() }>submit</button>
	</div>
)
}
}
// Categories.propTypes = {
//   // categories: PropTypes.array.isRequired,
//   // styles: PropTypes.array.isRequired

// }
export default Categories
