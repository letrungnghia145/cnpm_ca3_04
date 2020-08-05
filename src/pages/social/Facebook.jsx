import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  componentClicked = () => {};

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "150px",
            margin: "auto",
            background: "#f5f5f5",
            padding: "10px",
          }}
        >
          {/* <img src={this.state.picture} alt={this.state.name}></img> */}
          <p>Welcome, {this.state.name}</p>
        </div>
      );
    //   return <Redirect to="/" />;
    } else {
      fbContent = (
        <FacebookLogin
          appId="1478894188980713"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
        />
      );
    }

    return <React.Fragment>{fbContent}</React.Fragment>;
  }
}

export default Facebook;
