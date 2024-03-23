// Trong phần import của bạn
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "qrcode.react";
import "./homePage.scss";
import Header from "./header";
import Computer from "./computer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    };
  }
  componentDidMount() {
    let a = this.RandomCodeVerifier();
    this.setState({
      code: a,
    });
  }

  RandomCodeVerifier = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomCode = "";
    for (let i = 0; i < 6; i++) {
      randomCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomCode;
  };

  render() {
    return (
      <>
        <div className="container banking-box ">
          <div className="left-content">
            <h4 className="title">Chọn Ngân Hàng Mà Bạn Sử Dụng</h4>
            <div className="bank">
              <div className="choose-bank">
                <div className="mb-bank"></div>
                <div className="agri-bank"></div>
                <div className="bidv"></div>
                <div className="tp-bank"></div>
                <div className="viettin-bank"></div>
                <div className="vc-bank"></div>
                <div className="vp-bank"></div>
                <div className="acb"></div>
              </div>
              <div className="tag-bank"></div>
            </div>
          </div>
          <div className="right-content">
            <h4>Nhập Thông Tin Thanh Toán </h4>
            <input
              type="text"
              class="form-control number-card"
              id="email"
              name="email"
              value="MB bank"
              disabled
            />
            <input
              type="text"
              class="form-control number-card"
              id="email"
              placeholder="Nhập Số Thẻ"
              name="email"
            />
            <input
              type="number"
              class="form-control number-card"
              id="email"
              placeholder="Nhập Số Tiền"
              name="email"
              min={1}
            />
            <input
              type="text"
              class="form-control number-card"
              id="email"
              placeholder="Nhập Mã Xác Nhận"
              name="email"
            />
            <div className="code-exact">{this.state.code}</div>
            <p className="note">
              {" "}
              lưu ý: hãy nhập đúng tất cả thông tin đề phòng những sai xót có
              thể xảy ra{" "}
            </p>
            <button className="btn41-43 btn-41">Nạp Tiền</button>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
