import React from "react";
import { useForm } from "react-hook-form";
import logo from "./../../assets/img/logo.png";
import pgwind2 from "./../../assets/img/pgnwind2.png";
import pgwind from "./../../assets/img/pngwing.com.png";
import "./../../assets/css/regi-style.css";

export const Register = () => {

  const { register, handleSubmit, errors, watch } = useForm();

  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  return (
    <div className="wrapper">
      <div className="logo__back">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="inner">
        <img src={pgwind} alt="" className="image-1" />

        <form className="form__" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="h3__">Register</h3>
          <div className="form-holder">
            <span className="lnr lnr-user" />
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              ref={register({
                required: "Enter your username",
                minLength: {
                  value: 6,
                  message: "Your username is to short, min length is 6"
                }
               })}
            />
          </div>
          {errors.username && <p style={{color: "red"}} className="error">{errors.username.message}</p>}
          <div className="form-holder">
            <span className="lnr lnr-phone-handset" />
            <input
              type="number"
              name="tel"
              className="form-control"
              placeholder="Phone Number"
              ref={register({
                required: "Enter your tel",
                minLength: {
                  value: 9,
                  message: "Your tel is to short, min length is 9"
                },
                maxLength: {
                  value: 11,
                  message: "Your tel is to long, max length is 11"
                }
               })}
            />
          </div>
          {errors.tel && <p style={{color: "red"}} className="error">{errors.tel.message}</p>}
          <div className="form-holder">
            <span className="lnr lnr-envelope" />
            <input
              type="text"
              name="mail"
              className="form-control"
              placeholder="Mail"
              ref={register({
                required: "Enter your mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid mail address"
                },
              })}
            />
          </div>
          {errors.mail && <p style={{color: "red"}} className="error">{errors.mail.message}</p>}
          <div className="form-holder">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="genderSl"
              ref={register({ 
                required: true
               })}
            >
              <option value={0}>Gender</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Other</option>
            </select>
          </div>
          {errors.genderSl && <p style={{color: "red"}} className="error">{errors.genderSl.message}</p>}
          <div className="form-holder">
            <span className="lnr lnr-lock" />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              ref={register({
                required: "Enter your password",
                minLength: {
                  value: 8,
                  message: "Your password is to short, min length is 8"
                },
                pattern : {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "Your password must have atleast letter, number"
                }
              })}
            />
          </div>
          {errors.password && <p style={{color: "red"}} className="error">{errors.password.message}</p>}
          <div className="form-holder">
            <span className="lnr lnr-lock" />
            <input
              type="password"
              name="repassword"
              className="form-control"
              placeholder="Confirm Password"
              ref={register({
                validate: (value) => value === watch('password') || "The passwords do not match"
              })}
            />
          </div>
          {errors.repassword && <p style={{color: "red"}} className="error">{errors.repassword.message}</p>}
          <div className="form-holder"></div>
          <button type="submit" className="btn__">
            <span>Register</span>
          </button>
          <a href="/login" className="txt3">
            Have a account ? Sign in NOW
          </a>
        </form>
        <img src={pgwind2} alt="" className="image-2" />
      </div>
    </div>
  );
};
