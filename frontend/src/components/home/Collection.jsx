import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'

class Collection extends Component {

    constructor(props){
        super(props);
        this.state = {
            collection_products: []
        };
    }

    componentDidMount() {
        let self = this;
        axios.get('/get_products_by_type/collection')
        .then(function (response) {
          self.setState({collection_products:response.data.data});
        })
        .catch(function (error) {
        });
    }
     render() {
        let collection_products = this.state.collection_products.map(item => {
            return <Col key={item.id} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box card w-100">
                <img className="center w-75" src={item.image} />
                <Card.Body>
                    <p className="product-name-on-card">{item.title}</p>
                    <p className="product-price-on-card">Price : ${item.price}</p>

                </Card.Body>
            </Card>
        </Col>;
            });
          return (
              <Fragment>
                  <Container className="text-center" fluid={true}>
                      <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
                          <p>Some Of Our Exclusive Collection, You May Like</p>
                      </div>

                      <Row>
                        {collection_products}


                      </Row>
                  </Container>
              </Fragment>
          )
     }
}

export default Collection