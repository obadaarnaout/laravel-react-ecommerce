import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Refund from '../components/common/Refund'
import ReactHtmlParser from 'react-html-parser';

class RefundPage extends Component {
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
            {ReactHtmlParser(this.props.refund)}


            <Footer />
        </Fragment>
    )
  }
}

export default RefundPage
