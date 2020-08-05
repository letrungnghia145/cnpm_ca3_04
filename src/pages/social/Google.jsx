import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import './../../assets/css/login-style.css';

class Google extends Component {
  state = {
    isLoggedIn: false,
    name: "",
    email: "",
    imageURL: ""
  };

  responseGoogle = (response) => {
    this.setState({
      isLoggedIn: true,
      name: response.profileObj.name,
      mail: response.profileObj.mail,
      imageURL: response.profileObj.imageURL,
    });
  };

  render() {
    let ggContent;

    if (this.state.isLoggedIn) {
      ggContent = (
        <div
        style={{
          width: "150px",
          margin: "auto",
          background: "#f5f5f5",
          padding: "10px",
        }}
      >
        {/* <img src={this.state.imageURL} alt={this.state.name}></img> */}
        <p>Welcome, {this.state.name}</p>
      </div>
      );
    //   return <Redirect to="/" />;
    } else {
      ggContent = (
        <GoogleLogin
          clientId="479040402391-q7s6lhphln41p6ul0jd5fkg277hbja2d.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="button__login_google"
        />
      );
    }

    return <div>{ggContent}</div>;
  }
}

export default Google;
