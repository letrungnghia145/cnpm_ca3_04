import React from "react";

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
        <div className="col-md-4 col-md-offset-4">
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


