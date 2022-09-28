import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Notification from '../components/Notification/Notification'

export class NotificationPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
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
            <Notification />


            <Footer />
        </Fragment>
    )
  }
}

export default NotificationPage
