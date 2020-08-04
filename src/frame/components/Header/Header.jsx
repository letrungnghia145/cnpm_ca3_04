import React, {useState} from "react";
import "./";
import { CustomLink } from "../../../shared/components/custom-link/CustomLink";
import banner from "./../../../assets/img/hero/banner.jpg";
import logo from "./../../../assets/img/logo.png";

export const Header = () => {
  const [isShow, toggle] = useState(false);
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope" /> cnpm04@gmail.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="/">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="/">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="/">Vietnamese</a>
                      </li>
                      <li>
                        <a href="/">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth mr-2">
                    <a href="/login">
                      <i className="fa fa-user" /> Login
                    </a>
                  </div>
                  <div className="header__top__right__auth mr-2">
                    /
                  </div>
                  <div className="header__top__right__auth">
                    <a href="/register">Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <CustomLink to="/" activeOnlyWhenExact={true} label="Home" />
                  <CustomLink to="/categories" label="Shop" />
                  <li>
                    <a href="/">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <a href="/product">Shop Details</a>
                      </li>
                      <li>
                        <a href="/shoping-cart">Shoping Cart</a>
                      </li>
                      <li>
                        <a href="/checkout">Check Out</a>
                      </li>
                    </ul>
                  </li>
                  <CustomLink to="/contact" label="Contact" />
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-heart" /> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="/cart">
                      <i className="fa fa-shopping-bag" /> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all" onClick={()=>{toggle(!isShow)}}>
                  <i className="fa fa-bars" />
                  <span>All departments</span>
                </div>
                {isShow?<Navbar/>:null}
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    {/* <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div> */}
                    <input type="text" placeholder="What do you need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+84 964 123 321</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg"
                style={{ backgroundImage: `url(${banner})` }}
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="/" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const Navbar = () => {
  return (
    <ul>
      <li className="active">
        <a href="/">Fresh Meat</a>
      </li>
      <li>
        <a href="/">Vegetables</a>
      </li>
      <li>
        <a href="/">Fruit &amp; Nut Gifts</a>
      </li>
      <li>
        <a href="/">Fresh Berries</a>
      </li>
      <li>
        <a href="/">Ocean Foods</a>
      </li>
      <li>
        <a href="/">Butter &amp; Eggs</a>
      </li>
      <li>
        <a href="/">Fastfood</a>
      </li>
      <li>
        <a href="/">Fresh Onion</a>
      </li>
      <li>
        <a href="/">Papayaya &amp; Crisps</a>
      </li>
      <li>
        <a href="/">Oatmeal</a>
      </li>
      <li>
        <a href="/">Fresh Bananas</a>
      </li>
    </ul>
  );
};

// const categories = [
//   "Fresh Meat",
//   "Vegetables",
//   "Fruit & Nut Gifts",
//   "Fresh Berries",
//   "Ocean Foods",
//   `Butter & Eggs`,
//   "Fastfood",
//   "Fresh Onion",
//   "Papayaya & Crisps",
//   "Oatmeal",
//   "Fresh Bananas",
// ];
