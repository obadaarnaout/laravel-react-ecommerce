import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import UserLogin from '../components/common/UserLogin'

class LoginPage extends Component {
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
            <UserLogin />


            <Footer />
        </Fragment>
    )
  }
}

export default LoginPage
