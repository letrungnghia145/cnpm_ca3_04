import React from "react";
import img from './../../../assets/img/featured/feature-1.jpg'
export const ProductCard = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          style={{backgroundImage:`url(${img})`, color: "red"}}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#">Crab Pool Security</a>
          </h6>
          <h5>$30.00</h5>
        </div>
      </div>
    </div>
  );
};
