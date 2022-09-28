import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import MobileNav from '../components/common/MobileNav'
import Footer from '../components/common/Footer'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import axios from 'axios'
import withRouter from '../route/WithRouter';

export class ProductDetailsPage extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.params.id,
            product_data: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let self = this;
        axios.get('/get_products_by_id/'+this.state.id)
        .then(function (response) {
        self.setState({product_data:response.data.data});
        })
        .catch(function (error) {
        });
    }

  render() {
    return (
        <Fragment>
            <div className="Desktop">
                <Nav categories={this.props.categories}/>
            </div>
            <div className="Mobile">
                <MobileNav categories={this.props.categories}/>
            </div>
            <ProductDetails product_data={this.state.product_data}/>
            <SuggestedProduct />


            <Footer />
        </Fragment>
    )
  }
}

export default withRouter(ProductDetailsPage)
