import React from "react";
import logo from './../../assets/img/logo.png';
import pgwind2 from './../../assets/img/pgnwind2.png';
import pgwind from './../../assets/img/pngwing.com.png';
import './../../assets/css/regi-style.css';


export const Register = () => {
  return (
    <div className="wrapper">
      <div className="logo__back">
        <a href="./index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="inner">
        <img src={pgwind} alt="" className="image-1" />

        <form className="form__">
          <h3 className="h3__">Register</h3>
          <div className="form-holder">
            <span className="lnr lnr-user" />
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-phone-handset" />
            <input
              type="text"
              name="tel"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-envelope" />
            <input
              type="text"
              name="mail"
              className="form-control"
              placeholder="Mail"
            />
          </div>
          <div className="form-holder">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="genderSl"
            >
              <option value={0}>Gender</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Other</option>
            </select>
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock" />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock" />
            <input
              type="password"
              name="repassword"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn__">
            <span>Register</span>
          </button >
          <a href="/login" className="txt3">
            Have a account ? Sign in NOW
          </a>
        </form>

        <img src={pgwind2} alt="" className="image-2" />
      </div>
    </div>
  );
};
