import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

class FeaturedProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            featured_products: []
        };
    }
    componentDidMount() {
        let self = this;
        axios.get('/get_products_by_type/featured')
        .then(function (response) {
          self.setState({featured_products:response.data.data});
        })
        .catch(function (error) {
        });
    }
  render() {
    let featured_products = this.state.featured_products.map(item => {
        return <Col className="p-1" key={item.id} xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link to={'/product/'+item.id}>
            <Card className="image-box card">
                <img className="center" src={item.image} />
                <Card.Body>
                    <p className="product-name-on-card">{item.title}</p>
                    <p className="product-price-on-card">Price : ${item.price}</p>
                </Card.Body>
            </Card>
        </Link>
    </Col>;
        });
    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>Products</h2>
                    <p>Some of products you may like</p>
                </div>
                <Row>
                    {featured_products}
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default FeaturedProducts
