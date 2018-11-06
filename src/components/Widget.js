import React, { Component } from "react";
import styled from "styled-components";

// import sdkSrc from "../lr-sdk";
const sdkSrc = "https://content.onemarketnetwork.com/livereceipt/lr-sdk.min.js";

const Container = styled.div`
  margin: 0 0 1rem;
`;

class Widget extends Component {
  scriptId = "om-sdk-script";

  componentDidMount() {
    console.log("[spa] Add our sdk script...");
    this.addScript();
  }

  /**
   * This callback should be passed in as an argument for initializing the
   * SDK under the param name `afterInitCb`.
   *
   * The SDK will trigger this after the SDK is done initializing.
   *
   * @memberof Widget
   */
  onSdkReady = () => {
    // The SDK keeps track of the user's intent to opt in. Check if this flag is
    // true first before confirming the user opt in, otherwise you might
    // accidentally optin in a user that didn't want to.
    if (window.OM.optedIn) {
      const prevSavedOptinRef = window.OM.fbOptions.dataRef;
      console.log(
        "[spa] User has intent to opt-in. Time to opt in the user: ",
        prevSavedOptinRef
      );

      // The key method to call to finally opt the user in. It is vital
      // `confirmUserOptIn` is called only after the SDK has finished intializing.
      window.OM.confirmUserOptIn(prevSavedOptinRef);
    }
  };

  addScript = () => {
    // Please dont strangle me :(, just an example to see if script exists
    let scriptNode = document.getElementById(this.scriptId);

    // If script node
    if (null === scriptNode) {
      scriptNode = document.createElement("script");
      scriptNode.type = "text/javascript";
      scriptNode.id = this.scriptId;
      scriptNode.src = sdkSrc;
      scriptNode.addEventListener("load", this.loadedSdk);
      document.body.appendChild(scriptNode);
    } else {
      this.loadedSdk();
    }
  };

  loadedSdk = () => {
    const { optInRef, postCheckout } = this.props;
    const hasOptInRef = "undefined" !== typeof optInRef;
    console.log(
      "[spa] Finish loading script. Initialize SDK. hasOptInRef: ",
      hasOptInRef
    );

    window.OM.init({
      postCheckout: hasOptInRef,
      optInRef: optInRef,
      //   Only set the callback if we are postCheckout
      afterInitCb: postCheckout ? this.onSdkReady.bind(this) : undefined
    });
  };

  render() {
    return <Container id="messenger-plugin" />;
  }
}

export default Widget;
