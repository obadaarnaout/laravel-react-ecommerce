import React, { Component, Fragment } from 'react'
import MobileNav from '../components/common/MobileNav'
import Nav from '../components/common/Nav'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import HomeTopMobile from '../components/home/HomeTopMobile'
import Footer from '../components/common/Footer'
import axios from 'axios'

export class Home extends Component {

  constructor(props){
    super(props)
  }
  

  componentDidMount() {
    window.scrollTo(0, 0)
    this.addVisitor();
  }
  addVisitor = () => {
    axios.get('/add_visitor');
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <Nav categories={this.props.categories}/>
          <HomeTop categories={this.props.categories} sliders={this.props.sliders}/>
        </div>
        <div className="Mobile">
          <MobileNav categories={this.props.categories}/>
          <HomeTopMobile />
        </div>



        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
        <Footer />
      </Fragment>
    )
  }
}

export default Home
