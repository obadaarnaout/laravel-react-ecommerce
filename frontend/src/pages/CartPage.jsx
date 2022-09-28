import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Cart from '../components/Cart/Cart'

export class CartPage extends Component {
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
            <Cart />


            <Footer />
        </Fragment>
    )
  }
}

export default CartPage
