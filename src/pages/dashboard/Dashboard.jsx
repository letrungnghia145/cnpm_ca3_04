import React from "react";
import Frame from "../../frame";
import { ProductCard } from "../../shared/components/product-card/ProductCard";
import imgCategories from "./../../assets/img/blog/blog-1.jpg";
export const Dashboard = (props) => {
  const content = (
    <React.Fragment>
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={imgCategories} alt="" />
                </div>
                <div
                  className="blog__item__text"
                  style={{
                    position: "absolute",
                    top: 140,
                    left: 40,
                    paddingTop: 0,
                  }}
                >
                  <ul>
                    <li>
                      {/* <i className="fa fa-calendar-o" /> May 4,2019 */}
                    </li>
                    <li>{/* <i className="fa fa-comment-o" /> 5 */}</li>
                  </ul>
                  <h5>
                    <a href="#">Fresh Meat</a>
                  </h5>
                  <p>Description of Fresh Meat </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={imgCategories} alt="" />
                </div>
                <div
                  className="blog__item__text"
                  style={{
                    position: "absolute",
                    top: 140,
                    left: 40,
                    paddingTop: 0,
                  }}
                >
                  <ul>
                    <li>
                      {/* <i className="fa fa-calendar-o" /> May 4,2019 */}
                    </li>
                    <li>{/* <i className="fa fa-comment-o" /> 5 */}</li>
                  </ul>
                  <h5>
                    <a href="#">Fresh Meat</a>
                  </h5>
                  <p>Description of Fresh Meat </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={imgCategories} alt="" />
                </div>
                <div
                  className="blog__item__text"
                  style={{
                    position: "absolute",
                    top: 140,
                    left: 40,
                    paddingTop: 0,
                  }}
                >
                  <ul>
                    <li>
                      {/* <i className="fa fa-calendar-o" /> May 4,2019 */}
                    </li>
                    <li>{/* <i className="fa fa-comment-o" /> 5 */}</li>
                  </ul>
                  <h5>
                    <a href="#">Fresh Meat</a>
                  </h5>
                  <p>Description of Fresh Meat </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
  return <Frame content={content} />;
};
