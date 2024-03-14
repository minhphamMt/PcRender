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
  componentDidUpdate(preState, preProps) {
    if (preProps.activeLink !== this.props.activeLink) {
      this.setState({
        activeLink: this.props.activeLink,
      });
    }
  }
  handleResponse = () => {
    this.setState({
      boolean: !this.state.boolean,
    });
  };

  handleClick = (link) => {
    this.setState({
      boolean: false,
      activeLink: link,
    });
  };
  handleActive = (link) => {
    this.setState({
      activeLink: link,
    });
  };
  // handleClickLink = () => {
  //   let arrcoppy = this.props.handleSetActive();
  //   this.setState({
  //     arr: [...arrcoppy],
  //   });
  // };
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
              <p className="avatar"></p>
              <p className="bell"></p>
              <p className="coin-item"></p>
              {this.state.boolean === true && window.innerWidth <= 1300 && (
                <ul className="nav justify-content-center nav-345">
                  <li
                    className={
                      this.state.activeLink === "/computer"
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
                      this.state.activeLink === "/nav"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("/nav");
                    }}
                  >
                    <Link className="nav-link" to="/nav">
                      Nạp Tiền
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.activeLink === "#"
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
                      this.state.activeLink === "#"
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
                      this.state.activeLink === "/pcactive"
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
              {window.innerWidth > 1300 && (
                <ul className="nav justify-content-center">
                  <li
                    className={
                      this.state.activeLink === "/computer"
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
                      this.state.activeLink === "/nav"
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("/nav");
                    }}
                  >
                    <Link className="nav-link" to="/nav">
                      Nạp Tiền
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.activeLink === "#"
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
                      this.state.activeLink === "#"
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
                      this.state.activeLink === "/pcactive"
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
