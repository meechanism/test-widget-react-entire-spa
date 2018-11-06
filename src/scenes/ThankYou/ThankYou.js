import React, { Component } from "react";

import Widget from "../../components/Widget";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

class ThankYou extends Component {
  onClick = () => {
    window.location = "/";
  };

  render() {
    // The orderRef is a unique id you generate. You will use this to reference the order later if you want to send or update the receipt for this transaction.
    const orderRef = "<<UNIQUE ORDER REFERENCE YOU WILL STORE>>";

    // The retailerUserRef is a unique id you generate. You will use this later to send new and updated receipts to this customer and allow
    // them to manage their preferences.
    const retailerUserRef = "<<UNIQUE USER REF YOU WILL STORE>>";

    // The retailerRef code you provided to OneMarket during onboarding. You will have one for yourself or multiple if you are acting on
    // behalf of other retailers. Choose the correct one for the retailer.
    const retailerRef = "<<YOUR RETAILER-REF FOR THIS RETAILER>>";

    // The emailAddress is an email that customer uses to login and complete the online checkout process.
    const emailAddress = "<<CUSTOMER EMAIL ADDRESS>>";

    // OneMarket generated identifier for Partners.
    const applicationId = "<<PARTNER APPLICATION ID>>";

    // Assuming you get order creation data, you can properly populate this obj
    const optInRef = {
      ORDER_REF: orderRef,
      RETAILER_REF: retailerRef,
      RETAILER_USER_REF: retailerUserRef,
      FEATURE: "RECEIPTS",
      EMAIL: emailAddress,
      APP_ID: applicationId
    };

    return (
      <Wrapper>
        <Header>Thank you for your purchase!</Header>
        <Body>
          <p>Your [fake] order has been placed!</p>

          <Widget postCheckout optInRef={optInRef} />
          <Button inverse onClick={this.onClick}>
            &larr; Start Over
          </Button>
        </Body>
        <Footer />
      </Wrapper>
    );
  }
}

export default ThankYou;
