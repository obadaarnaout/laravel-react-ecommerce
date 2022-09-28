import React, { Component , Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import About from '../components/common/About'
import ReactHtmlParser from 'react-html-parser';

export class AboutPage extends Component {
    constructor(props) {
        super(props);
      }
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
            {ReactHtmlParser(this.props.about_us)}


            <Footer />
        </Fragment>
    )
  }
}

export default AboutPage
