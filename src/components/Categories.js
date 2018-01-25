// import React from 'react'
import React, { Component } from 'react'

import PropTypes from 'prop-types'

const nonselected = {
	display: 'inline-block',
	padding: '20px'
}
const selected = {
	display: 'inline-block',
	padding: '20px',
	fontWeight: 'bold',
	textDecoration: 'underline'
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
							<li key={i}  >{item.question}
														<select onChange={this.handleChange} >
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
Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired

}
export default Categories
