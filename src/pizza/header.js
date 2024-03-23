import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: this.props.coin,
      boolean: this.props.boolean,
      arr: [],
      activeLink: this.props.activeLink,
    };
  }
  componentDidMount() {
    this.setState({ activeLink: "/computer" });
  }
  // componentDidUpdate(preState, preProps) {
  //   if (preProps.activeLink !== this.props.activeLink) {
  //     this.setState({
  //       activeLink: this.props.activeLink,
  //     });
  //   }
  // }
  handleResponse = () => {
    this.setState({
      boolean: !this.state.boolean,
    });
  };

  handleClick = (link) => {
    this.props.handleSetLink(link);
    this.setState({
      boolean: false,
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
  render() {
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
              <p className="coin-item"></p>
              {this.state.boolean === true && window.innerWidth <= 1199 && (
                <ul className="nav justify-content-center nav-345">
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
                  <li className="it coin">{this.state.coin} VND</li>
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
                  <li className="it coin">{this.state.coin} VND</li>
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
