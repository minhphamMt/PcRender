import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: this.props.coin,
      boolean: false,
      arr: [],
      activeLink: this.props.activeLink,
    };
  }
  componentDidMount() {
    this.setState({ activeLink: "/computer" });
  }
  componentDidUpdate(preState, preProps) {
    if (preProps.coin !== this.props.coin) {
      this.setState({
        coin: this.props.coin,
      });
    }
  }
  handleResponse = () => {
    this.setState({
      boolean: !this.state.boolean,
    });
  };

  handleClick = (link) => {
    this.props.handleSetLink(link);
    this.setState({
      boolean: true,
    });
  };
  handleActive = (link) => {
    this.props.handleSetLink(link);
  };
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Hàm chuyển đổi số thành chuỗi rút gọn
  shortenNumber = (num) => {
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(("" + num).length / 4);
    let shortNum = parseFloat(
      (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
    );
    if (shortNum % 1 !== 0) {
      shortNum = shortNum.toFixed(1);
    }
    return shortNum + suffixes[suffixNum];
  };

  render() {
    const { coin } = this.state;
    const formattedCoin = this.shortenNumber(coin);
    return (
      <>
        <div className="container-fuild hhhhh">
          <div className="header">
            <div className="left-content">
              <div className="logo"></div>
            </div>
            <div className="right-content">
              <p
                className="respon"
                onClick={() => {
                  this.handleResponse();
                }}
              ></p>
              <p className="avatar" onClick={() => this.scrollToTop()}></p>
              <p className="bell"></p>
              {/* <p className="coin-item"></p> */}
              {window.innerWidth <= 1199 && (
                <ul
                  className={`nav justify-content-center nav-345 ${
                    this.state.boolean === false ? "enable" : "visible"
                  }`}
                >
                  <li
                    className={
                      this.props.activeLink === "/computer"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("/computer");
                    }}
                  >
                    <Link className="nav-link" to="/computer">
                      Thuê Máy Tính
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "/bank"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("/bank");
                    }}
                  >
                    <Link className="nav-link" to="/bank">
                      Nạp Tiền
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "#"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("#");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Đơn Hàng
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "#"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("#");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Log
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "/pcactive"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("/pcactive");
                    }}
                  >
                    <Link className="nav-link" to="/pcactive">
                      Pc đã tạo
                    </Link>
                  </li>
                  <li className="it coin">{formattedCoin} VND</li>
                  <p className="coin-item"></p>
                </ul>
              )}
              {window.innerWidth > 1199 && (
                <ul className="nav justify-content-center nav-header-big">
                  <li
                    className={
                      this.props.activeLink === "/computer"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("/computer");
                    }}
                  >
                    <Link className="nav-link" to="/computer">
                      Thuê Máy Tính
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "/bank"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("/bank");
                    }}
                  >
                    <Link className="nav-link" to="/bank">
                      Nạp Tiền
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "#"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("#");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Đơn Hàng
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "#"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("#");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Log
                    </Link>
                  </li>
                  <li
                    className={
                      this.props.activeLink === "/pcactive"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("/pcactive");
                    }}
                  >
                    <Link className="nav-link" to="/pcactive">
                      Pc đã tạo
                    </Link>
                  </li>
                  <li className="it coin">{formattedCoin} VND</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
