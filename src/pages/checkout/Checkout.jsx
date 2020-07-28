import React from "react";
import Frame from "../../frame";

export const Checkout = (props) => {
  const content = (
    <React.Fragment>
      {/* <Banner title="Checkout" home="Home" page="Checkout"/> */}
      <section className="checkout spad">
        <div className="container">
          <CheckDiscount />
          <CheckoutForm />
        </div>
      </section>
    </React.Fragment>
  );
  return <Frame content={content} />;
};

export const CheckoutForm = (props) => {
  return (
    <div className="checkout__form">
      <h4>Billing Details</h4>
      <form>
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="checkout__input">
                  <p>
                    Fist Name<span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="checkout__input">
                  <p>
                    Last Name<span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="checkout__input">
              <p>
                Country<span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="checkout__input">
              <p>
                Address<span>*</span>
              </p>
              <input
                type="text"
                placeholder="Street Address"
                className="checkout__input__add"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unite ect (optinal)"
              />
            </div>
            <div className="checkout__input">
              <p>
                Town/City<span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="checkout__input">
              <p>
                Country/State<span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="checkout__input">
              <p>
                Postcode / ZIP<span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="checkout__input">
                  <p>
                    Phone<span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="checkout__input">
                  <p>
                    Email<span>*</span>
                  </p>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="checkout__input__checkbox">
              <label htmlFor="acc">
                Create an account?
                <input type="checkbox" id="acc" />
                <span className="checkmark" />
              </label>
            </div>
            <p>
              Create an account by entering the information below. If you are a
              returning customer please login at the top of the page
            </p>
            <div className="checkout__input">
              <p>
                Account Password<span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="checkout__input__checkbox">
              <label htmlFor="diff-acc">
                Ship to a different address?
                <input type="checkbox" id="diff-acc" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="checkout__input">
              <p>
                Order notes<span>*</span>
              </p>
              <input
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="checkout__order">
              <h4>Your Order</h4>
              <div className="checkout__order__products">
                Products <span>Total</span>
              </div>
              <ul>
                <li>
                  <span></span>
                </li>
              </ul>
              <div className="checkout__order__subtotal">
                Subtotal <span></span>
              </div>
              <div className="checkout__order__total">
                Total <span></span>
              </div>
              <div className="checkout__input__checkbox">
                <label htmlFor="acc-or">
                  Create an account?
                  <input type="checkbox" id="acc-or" />
                  <span className="checkmark" />
                </label>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="checkout__input__checkbox">
                <label htmlFor="payment">
                  Check Payment
                  <input type="checkbox" id="payment" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="checkout__input__checkbox">
                <label htmlFor="paypal">
                  Paypal
                  <input type="checkbox" id="paypal" />
                  <span className="checkmark" />
                </label>
              </div>
              <button type="submit" className="site-btn">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export const CheckDiscount = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h6>
          <span className="icon_tag_alt" /> Have a coupon?{" "}
          <a href="/">Click here</a> to enter your code
        </h6>
      </div>
    </div>
  );
};
