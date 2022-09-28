import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png'
import axios from 'axios'
import { Navigate } from 'react-router'

class UserLogin extends Component {
    state = {
        error: '',
        success: '',
        redirect: false
      }
    LoginFormSubmit = (e) => {
        e.preventDefault();
        let self = this;
        axios.post('/login',{
          email: e.target.email.value,
          password: e.target.password.value
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);

          let success_error = <div className='alert alert-success'>{response.data.message}</div>;
          self.setState({error: '',
                         success: success_error,
                         redirect: true});
          self.props.setUser(response.data.user);
          self.props.setLoggedIn(true);
        })
        .catch(function (error) {
          let alert_error = <div className='alert alert-danger'>{error.response.data.message}</div>;
          self.setState({error: alert_error,
                         success: ''});
        });
    }
  render() {
    if (localStorage.getItem('token') !== null) {
        return (<Navigate to={'/'}/>)
      }
      if (this.state.redirect) {
        return (<Navigate to="/" />)
      }
    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                        <Row className="text-center">
                        {this.state.error}
                            {this.state.success}
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                            
                                <Form className="onboardForm" onSubmit={this.LoginFormSubmit}>
                                    <h4 className="section-title-login"> USER SING IN </h4>
                                    <h6 className="section-sub-title">Please Enter Your Mobile Number</h6>
                                    <input className="form-control m-2" type="email" placeholder="Enter email" name='email'/>
                                    <input className="form-control m-2" type="password" placeholder="Enter password" name='password'/>
                                    <Button className="btn btn-block m-2 site-btn-login" type='submit'> login </Button>

                                </Form>


                            </Col>

                            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                <img className="onboardBanner" src={Login} />
                            </Col>
                        </Row>






                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default UserLogin
