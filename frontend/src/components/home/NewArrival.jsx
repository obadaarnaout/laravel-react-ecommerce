import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

export class NewArrival extends Component {
    constructor(props){
        super(props);
        this.state = {
            new_products: []
        };
    }
    previous = () => {
        this.slider.slickPrev();
    }
    next = () => {
        this.slider.slickNext();
    }
    componentDidMount() {
        let self = this;
        axios.get('/get_products_by_type/new')
        .then(function (response) {
          self.setState({new_products:response.data.data});
        })
        .catch(function (error) {
        });
    }
  render() {
    let new_products = this.state.new_products.map(item => {
        return <div key={item.id}>
        <Card className="image-box card">
            <img className="center" src={item.image} />
            <Card.Body>
                <p className="product-name-on-card">{item.title}</p>
                <p className="product-price-on-card">Price : ${item.price}</p>

            </Card.Body>
        </Card>
    </div>;
        });

    
      var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      initialSlide: 2
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      };
    return (
        <Fragment>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>NEW ARRIVAL &nbsp;

                        <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
                        &nbsp;
                        <a className="btn btn-sm ml-2 site-btn" onClick={this.next} ><i className="fa fa-angle-right"></i></a>

                    </h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>

                <Row>

                    <Slider ref={s => (this.slider = s)} {...settings}>
                        {new_products}
                    </Slider>

                </Row>


            </Container>

        </Fragment>
    )
  }
}

export default NewArrival
