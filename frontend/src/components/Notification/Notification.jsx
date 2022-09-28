import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap'
import AppContext from '../AppContext';
class Notification extends Component {
    static contextType = AppContext;

     constructor(){
          super();
          this.state={
               show:false,
               model_title: '',
               model_message: '',
               model_date: ''
          }
          
     }

      handleClose = (e) =>{
          this.setState({ show:false})
      };  

      handleShow = (e) => {
            let notify = this.context.notifications.filter(item => (item.id == e.target.getAttribute("data-id")));
            console.log(notify[0].title)
           this.setState({ 
            model_title: notify[0].title,
            model_message: notify[0].message,
            model_date: notify[0].date,
            show:true
         })
      }; 

     render() {
        const notifications = this.context.notifications;
        let render_data = notifications.map(item => {
            return  <Col className=" p-1 " key={item.id} md={6} lg={6} sm={12} xs={12}>
            <Card className="notification-card">
                <Card.Body>
                    <h6> {item.title}</h6>
                    <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   {item.created_at}</p>
                    <Button onClick={this.handleShow} data-id={item.id}>Show</Button>
                </Card.Body>
            </Card>
        </Col>;
      
        });
          return (
              <Fragment>

                  <Container className="TopSection">
                      <Row>
                          {render_data}

                      </Row>
                  </Container>


                  <Modal show={this.state.show} onHide={this.handleClose}>
                      <Modal.Header closeButton>
                          <h6><i className="fa fa-bell"></i> Date:{this.state.model_date}</h6>
                      </Modal.Header>
                      <Modal.Body>
                          <h6>{this.state.model_title}</h6>
                          <p>
                          {this.state.model_message}
                          </p>



                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={this.handleClose}>
                              Close
                          </Button>

                      </Modal.Footer>
                  </Modal>



              </Fragment>
          )
     }
}

export default Notification
