import React, { Component, Fragment } from 'react'
import {
    Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'
import withRouter from '../route/WithRouter';

export class ProductCategoryPage extends Component {
    constructor(props){
        super(props)
        this.state={
            category:props.params.category,
            subcategory:props.params.subcategory,
            category_products:[] 
       }
      }

      componentDidMount() {
        window.scrollTo(0, 0)
        let self = this;
        if (typeof(this.state.category) != 'undefined') {
          axios.get('/get_products_by_category/'+this.state.category)
          .then(function (response) {
            self.setState({category_products:response.data.data});
          })
          .catch(function (error) {
          });
        }
        else if (typeof(this.state.subcategory) != 'undefined') {
          axios.get('/get_products_by_sub_category/'+this.state.subcategory)
          .then(function (response) {
            self.setState({category_products:response.data.data});
          })
          .catch(function (error) {
          });
        }
        
    }
  render() {
    return (
        <Fragment>
        <div className="Desktop">
            <Nav  categories={this.props.categories}/>
        </div>
        <div className="Mobile">
            <MobileNav  categories={this.props.categories}/>
        </div>
        <Category category_products={this.state.category_products}/>
        


        <Footer />
    </Fragment>
    )
  }
}

export default withRouter(ProductCategoryPage)
