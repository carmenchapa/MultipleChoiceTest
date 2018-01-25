import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCategories, fetchProducts } from '../actions'

import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import Products from '../components/Products'

class App extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
    styles: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      const { dispatch } = nextProps
      dispatch(fetchCategories())
      dispatch(fetchProducts())
    }
  }

  getCategory = (nextCategory, index) => {
    console.log('inGetCategory')
    // this.props.dispatch(selectCategory(nextCategory))
    this.props.dispatch(fetchProducts())
  }

  getAnswer = () => {
    console.log('inAnswer')
    // this.props.dispatch(selectCategory(nextCategory))
    // this.props.dispatch(fetchProducts())
  }

  submit = () => {
    console.log('inSubmit')
    // this.props.dispatch(selectCategory(nextCategory))
    // this.props.dispatch(fetchProducts())
  }

  handleSearch = (e) => {
    e.preventDefault()
    const browse = e.target.input.value
    this.props.dispatch(fetchProducts(browse))
  }

  render() {
    const { ...categories} = this.props
    return (
      <div>
        <div>            
            {/* <Categories categories={categories} getCategory={this.getCategory} styles={styles} /> */}
            <Categories questions={this.props} getCategory={this.getCategory} getAnswer={this.getAnswer} submit={this.submit} />
            
            <SearchBar getValue={this.handleSearch}/>
            {/* <Products products={products}/> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { category, categoriesList, productsListByCategory, styledCategoriesList } = state
  const {
    categories
  } = categoriesList[category] || {
    categories: []
  }
  const {
    products
  } = productsListByCategory[category] || {
    products: []
  }
  // const {
  //   styles
  // } = styledCategoriesList[category] || {
  //   styles: []
  // }

  return {
    categories,
    products,
    // styles
  }
}

export default connect(mapStateToProps)(App)
