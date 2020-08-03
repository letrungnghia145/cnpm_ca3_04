import React from "react";
import logo from './../../assets/img/logo.png';

export const ForgotPassword = (props) => {
  const content = (
    <React.Fragment>
      <ForgotForm />
    </React.Fragment>
  );
  return content;
};

export const ForgotForm = (props) => {
  return (
    <div className="container">
      <div className="row">
      <div className="logo__back_login">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
        <div className="col-md-12 col-md-offset-12" style={{padding: "180px 370px"}}>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <h3>
                  <i className="fa fa-lock fa-4x" />
                </h3>
                <h2 className="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div className="panel-body">
                  <form className="form">
                    <fieldset>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue" />
                          </span>
                          <input
                            id="emailInput"
                            placeholder="email address"
                            className="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          style={{backgroundColor:"#7fad39", borderColor:"#7fad39"}}
                          className="btn btn-lg btn-primary btn-block"
                          defaultValue="Send My Password"
                          type="submit"
                        />
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


