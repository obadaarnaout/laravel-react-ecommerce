import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import {Link} from "react-router-dom";
import MegaMenuMobile from "./MegaMenuMobile"


export class MobileNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      sideNav: "sideNavClose",
      ContentOverlay: "ContentOverlayClose"
    }
  }

  handelMobileMenuClick = () => {
    if(this.state.sideNav === 'sideNavClose'){
      this.setState(
        {
          sideNav : 'sideNavOpen',
          ContentOverlay : 'ContentOverlayOpen'
        }
      );
    }
    else{
      this.setState(
        {
          sideNav : 'sideNavClose',
          ContentOverlay : 'ContentOverlayClose'
        }
      );
    }
  }
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">


          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>

                <Button onClick={this.handelMobileMenuClick} className="btn"><i className="fa fa-bars"></i>  </Button>

                <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>

                <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
              </Col>

            </Row>

          </Container>

          <div className={this.state.sideNav}>
            <MegaMenuMobile categories={this.props.categories}/>
          </div>

          <div className={this.state.ContentOverlay}>

          </div>




        </div>
      </Fragment>
    )
  }
}

export default MobileNav
