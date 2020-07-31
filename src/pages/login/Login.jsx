import React from "react";
import backgroundLogin from './../../assets/img/background-login.jpg'
import './../../assets/css/login-style.css';
import logo from './../../assets/img/logo.png';

export const Login = () => {
  return (
    <div className="limiter">
      <div className="logo__back_login">
        <a href="./index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-34">Account Login</span>
            <div
              className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
              data-validate="Type user name"
            >
              <input
                id="first-name"
                className="input100"
                type="text"
                name="username"
                placeholder="User name"
              />
              <span className="focus-input100" />
            </div>
            <div
              className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
              data-validate="Type password"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="focus-input100" />
            </div>
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Sign in
              </button>
            </div>
            <div className="w-full text-center p-t-27 p-b-239">
              <span className="txt1">Forgot </span>
              <a href="/" className="txt2">
                User name / password?
              </a>
            </div>
            <div className="w-full text-center">
              <a href="/register" className="txt3">
                Register
              </a>
            </div>
          </form>
          <div
            className="login100-more"
            style={{ backgroundImage: `url(${backgroundLogin})` }}
          />
        </div>
      </div>
    </div>
  );
};
