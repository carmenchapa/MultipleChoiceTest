import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCategories, setPickedAnswer } from '../actions'

import Categories from '../components/Categories'

class App extends Component {
  static propTypes = {
    // categories: PropTypes.array.isRequired,
    // dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
    // dispatch(fetchProducts())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      const { dispatch } = nextProps
      dispatch(fetchCategories())
      // dispatch(fetchProducts())
    }
  }

  getAnswer = (event) => {
    console.log('inAnswer')
    console.log(event.target.value)
    console.log(event.target.name)
    const index = event.target.name
    const answer = event.target.value
    this.props.dispatch(setPickedAnswer(index, answer))
  }

  submit = () => {
    console.log('inSubmit')
    // this.props.dispatch(selectCategory(nextCategory))
    // this.props.dispatch(fetchProducts())
  }

  render() {
    // const { ...categories} = this.props
    return (
      <div>
          <Categories questions={this.props}  getAnswer={this.getAnswer} submit={this.submit} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { category, categoriesList } = state

  // const { category, categoriesList, styledCategoriesList } = state
  const {
    categories
  } = categoriesList[category] || {
    categories: []
  }


  return {
    categories,
  }
}

export default connect(mapStateToProps)(App)
