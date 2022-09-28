import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Privacy from '../components/common/Privacy'
import ReactHtmlParser from 'react-html-parser';

class PrivacyPage extends Component {
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
            {ReactHtmlParser(this.props.privacy)}


            <Footer />
        </Fragment>
    )
  }
}

export default PrivacyPage
