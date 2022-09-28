import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount(){
        let self = this;
        axios.get('/get_categories')
        .then(function (response) {
        self.setState({categories:response.data.data});
        })
        .catch(function (error) {
        });
    }
  render() {
    let cat = this.state.categories.map(item => {
        return  <Link to={"/productcategory/"+item.id}><Col className="p-0" key={item.id} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className="h-100 w-100 text-center">
                        <Card.Body>
                            <img className="center" src={item.image} />
                            <h5 className="category-name">{item.name}</h5>
                        </Card.Body>
                    </Card>
                </Col>
                </Link>;
  
    });
    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>

                <Row>


                    <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            {cat}
                        </Row>

                    </Col>

                </Row>



            </Container>
        </Fragment>
    )
  }
}

export default Categories
