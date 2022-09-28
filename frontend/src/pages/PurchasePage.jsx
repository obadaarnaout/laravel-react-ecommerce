import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Purchase from '../components/common/Purchase'
import ReactHtmlParser from 'react-html-parser';

class PurchasePage extends Component {
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
            {ReactHtmlParser(this.props.purchase)}


            <Footer />
        </Fragment>
    )
  }
}

export default PurchasePage
