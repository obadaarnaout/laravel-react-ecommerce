import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop.png';
import {Link} from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';
import Bars from '../../assets/images/bars.png';
import AppContext from '../AppContext';
import axios from 'axios'

export class Nav extends Component {
  static contextType = AppContext;
  constructor(props){
    super(props);
    this.state = {
      sideNav: "sideNavClose",
      ContentOverlay: "ContentOverlayClose",
      search: [],
      loggedIn: (!localStorage.getItem('token') ? false : true)
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

  ProductSearch = (e) => {
    console.log(e.target.value)
    let self = this;
    axios.get('/search/'+e.target.value)
    .then(function (response) {
      console.log(response.data.data)
    self.setState({search:response.data.data});
    })
    .catch(function (error) {
    });

  }
  logOut = () => {
    localStorage.removeItem('token');
    this.setState(
      {
        loggedIn: false
      });
  }
  render() {
    let search_data = this.state.search.map(item => {
      return  <Link to={"/product/"+item.id} key={item.id}>
                  <h5 className="category-name">{item.title}</h5>
              </Link>;

  });
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={"top"} className="navbar" bg="light">

            <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                <img onClick={this.handelMobileMenuClick} className="bar-img" src={Bars} />
                  <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input type="text" className="form-control" onChange={this.ProductSearch}/>
                    <Button type="button" className="btn site-btn"><i className="fa fa-search"> </i>
                    </Button>
                  </div>
                  {search_data}
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">5</span></sup>
                  </Link>
                  <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">{this.context.notifications.length}</span></sup>
                  </Link>
                  <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                  {!localStorage.getItem('token') && <Link to="/login" className="h4 btn">LOGIN</Link>}
                  {localStorage.getItem('token') && <Link to="/" onClick={this.logOut} className="h4 btn">LOG OUT</Link>}

                  <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
                </Col>

              </Row>

            </Container>

          </Navbar>
        </div>
        <div className={this.state.sideNav}>
                <MegaMenuAll categories={this.props.categories}/>
          </div>

               <div onClick={this.handelMobileMenuClick} className={this.state.ContentOverlay}>

               </div>

      </Fragment>
    )
  }
}

export default Nav
