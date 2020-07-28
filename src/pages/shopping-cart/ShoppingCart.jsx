import React from "react";
import Frame from "../../frame";
import img1 from './../../assets/img/cart/cart-1.jpg';
import img2 from './../../assets/img/cart/cart-2.jpg';
import img3 from './../../assets/img/cart/cart-3.jpg';

export const ShoppingCart = (props) => {
  const content = (
    <React.Fragment>
      {/* <Banner title="Shopping Cart" home="Home" page="Shopping Cart"/> */}
      <section className="shoping-cart spad">
        <div className="container">
          <CartItem />
          <div className="row">
            <CartUpdate />
            <Discount />
            <CartTotal />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
  return <Frame content={content} />;
};

export const CartItem = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="shoping__cart__table">
          <table>
            <thead>
              <tr>
                <th className="shoping__product">Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shoping__cart__item">
                  <img src={img1} alt="" />
                  <h5>Vegetable’s Package</h5>
                </td>
                <td className="shoping__cart__price">$55.00</td>
                <td className="shoping__cart__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" defaultValue={1} />
                      <span className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="shoping__cart__total">$110.00</td>
                <td className="shoping__cart__item__close">
                  <span className="icon_close" />
                </td>
              </tr>
              <tr>
                <td className="shoping__cart__item">
                  <img src={img2} alt="" />
                  <h5>Fresh Garden Vegetable</h5>
                </td>
                <td className="shoping__cart__price">$39.00</td>
                <td className="shoping__cart__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" defaultValue={1} />
                      <span className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="shoping__cart__total">$39.99</td>
                <td className="shoping__cart__item__close">
                  <span className="icon_close" />
                </td>
              </tr>
              <tr>
                <td className="shoping__cart__item">
                  <img src={img3} alt="" />
                  <h5>Organic Bananas</h5>
                </td>
                <td className="shoping__cart__price">$69.00</td>
                <td className="shoping__cart__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" defaultValue={1} />
                      <span className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="shoping__cart__total">$69.99</td>
                <td className="shoping__cart__item__close">
                  <span className="icon_close" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const CartTotal = (props) => {
  return (
    <div className="col-lg-6">
      <div className="shoping__checkout">
        <h5>Cart Total</h5>
        <ul>
          <li>
            Subtotal <span>$454.98</span>
          </li>
          <li>
            Total <span>$454.98</span>
          </li>
        </ul>
        <a href="/" className="primary-btn">
          PROCEED TO CHECKOUT
        </a>
      </div>
    </div>
  );
};

export const CartUpdate = (props) => {
  return (
    <div className="col-lg-12">
      <div className="shoping__cart__btns">
        <a href="/" className="primary-btn cart-btn">
          CONTINUE SHOPPING
        </a>
        <a href="/" className="primary-btn cart-btn cart-btn-right">
          <span className="icon_loading" />
          Upadate Cart
        </a>
      </div>
    </div>
  );
};

export const Discount = (props) => {
  return (
    <div className="col-lg-6">
      <div className="shoping__continue">
        <div className="shoping__discount">
          <h5>Discount Codes</h5>
          <form>
            <input type="text" placeholder="Enter your coupon code" />
            <button type="submit" className="site-btn">
              APPLY COUPON
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
