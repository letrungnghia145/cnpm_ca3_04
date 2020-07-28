import React from "react";
import Frame from "../../frame";

export const Contact = (props) => {
  const content = (
    <React.Fragment>
      <ContactInformation />
      <Map />
      <ContactForm />
    </React.Fragment>
  );
  return <Frame content={content} />;
};

export const ContactForm = (props) => {
  return (
    <div class="contact-form spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="contact__form__title">
              <h2>Leave Message</h2>
            </div>
          </div>
        </div>
        <form action="#" >
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <input type="text" placeholder="Your name" />
            </div>
            <div class="col-lg-6 col-md-6">
              <input type="text" placeholder="Your Email" />
            </div>
            <div class="col-lg-12 text-center">
              <textarea placeholder="Your message"></textarea>
              <button type="submit" class="site-btn">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Map = (props) => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.1351780450427!2d106.7900634201404!3d10.867029822570414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276120e747b7%3A0x4621264c786596c7!2zxJDhuqFpIGjhu41jIE7DtG5nIEzDom0!5e0!3m2!1svi!2s!4v1595649295296!5m2!1svi!2s"
        height={500}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        title="myFrame"
      />
      <div className="map-inside">
        <i className="icon_pin" />
        <div className="inside-widget">
          <h4>Đại Học Nông Lâm TPHCM</h4>
        </div>
      </div>
    </div>
  );
};
export const ContactInformation = (props) => {
  return (
    <section className="contact spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 text-center">
            <div className="contact__widget">
              <span className="fas fa-phone-alt icon_phone"></span>
              <h4>Phone</h4>
              <p>+01-3-8888-6868</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center">
            <div className="contact__widget">
              <span className="fas fa-map-marker-alt icon_pin_alt"></span>
              <h4>Address</h4>
              <p>
                KP6, Phường Linh Trung,
                <br />
                Quận Thủ Đức, TP. Hồ Chí Minh,
                <br />
                Việt Nam
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center">
            <div className="contact__widget">
              <span className="far fa-clock icon_clock_alt" />
              <h4>Open time</h4>
              <p>6:00 am to 22:00 pm</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 text-center">
            <div className="contact__widget">
              <span className="far fa-envelope icon_mail_alt" />
              <h4>Email</h4>
              <p>vphanhchinh@hcmuaf.edu.vn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
