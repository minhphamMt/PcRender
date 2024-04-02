import React from "react";
import "./footer.scss";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!",
    };
  }

  render() {
    return (
      <div className="container-fuild">
        <section className="footer">
          <div className="footer-row">
            <div className="footer-col">
              <h4>LIÊN HỆ</h4>
              <ul className="links">
                <li>
                  <i className="bx bxs-building-house ct-icon"></i> CÔNG TY TNHH
                  CÔNG NGHỆ PC Render
                </li>
                <li>
                  <i className="bx bxs-location-plus ct-icon"></i> Số 6 Đường Tự
                  Do 1, P. Tân Thành, Q. Tân phú,
                  <br /> TP Hồ Chí Minh, Việt Nam
                </li>
                <li>
                  <i className="bx bxs-phone ct-icon"></i> 083.321.8888
                </li>
                <li>
                  <i className="bx bxs-envelope ct-icon"></i>{" "}
                  support@pcrender.com
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>THÔNG TIN</h4>
              <ul className="links">
                <li>
                  <a href="about.html">Giới thiệu</a>
                </li>
                <li>
                  <a href="view/term-of-service.html">Điều khoản</a>
                </li>
                <li>
                  <a href="login_is_false.html">Hướng dẫn</a>
                </li>
                <li>
                  <a href="support.html">Hỗ trợ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <img className="footer-logo" src="assets/logo.png" alt="" />
              <p>Đăng kí để nhận thông tin mới nhất từ chúng tôi !</p>
              <form action="#">
                <input type="email" placeholder="Email" required />
                <button className="btn btn-primary">SUBSCRIBE</button>
              </form>
            </div>
          </div>
          <div className="icons">
            <a href="">
              <i className="bx bxl-facebook-square"></i>
            </a>
            <a href="">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
