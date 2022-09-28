import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Favourite from '../components/Favourite/Favourite'

export class FavouritePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
  render() {
    return (
        <Fragment>
            <div className="Desktop">
                <Nav />
            </div>
            <div className="Mobile">
                <MobileNav />
            </div>
            <Favourite />


            <Footer />
        </Fragment>
    )
  }
}

export default FavouritePage
