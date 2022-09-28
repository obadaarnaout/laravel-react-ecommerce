import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'

class Refund extends Component {
     render() {
          return (
              <Fragment>
                  <Container>
                      <Row className="p-2">
                          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                              <h4 className="section-title-login">Refund Page </h4>
                              <p className="section-title-contact">
                                  amount = The amount for the buyer to send in the destination currency (currency2).
                                  address = The address the buyer needs to send the coins to.
                                  dest_tag = The tag buyers need to attach for the payment to complete. (only included for coins that require them such as XRP/XMR/etc.)
                                  alt_address = Optional alternate representation of an address such as X-address format for Ripple or legacy V-prefix for Velas EVM.
                                  txn_id = The CoinPayments.net transaction ID.
                                  confirms_needed = The number of confirms needed for the transaction to be complete.
                                  timeout = How long the buyer has to send the coins and have them be confirmed in seconds.
                                  checkout_url = While normally you would be designing the full checkout experience on your site you can use this URL to provide the final payment page to the buyer.
                                  status_url = A longer-term URL where the buyer can view the payment status and leave feedback for you. This would typically be emailed to the buyer.
                                  qrcode_url = A URL to a QR code you can display for buyer's paying with a QR supporting wallet.
                              </p>


                          </Col>
                      </Row>
                  </Container>
              </Fragment>
          )
     }
}

export default Refund