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
    };
  }

  handleResponse = () => {
    this.setState({
      boolean: !this.state.boolean,
    });
  };

  handleClick = (item) => {
    let arrcoppy = [];
    arrcoppy[item] = true;
    this.setState({
      boolean: false,
      arr: [...arrcoppy],
    });
  };
  handleActive = (item) => {
    let arrcoppy = [];
    arrcoppy[item] = true;
    this.setState({
      arr: [...arrcoppy],
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
              <p className="avatar"></p>
              <p className="bell"></p>
              <p className="coin-item"></p>
              {this.state.boolean === true && window.innerWidth <= 1300 && (
                <ul className="nav justify-content-center nav-345">
                  <li
                    className={
                      this.state.arr[1] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("1");
                    }}
                  >
                    <Link className="nav-link" to="/computer">
                      Thuê Máy Tính
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[2] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("2");
                    }}
                  >
                    <Link className="nav-link" to="/nav">
                      Nạp Tiền
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[3] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("3");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Đơn Hàng
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[4] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("4");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Log
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[5] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleClick("5");
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
                      this.state.arr[1] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("1");
                    }}
                  >
                    <Link className="nav-link" to="/computer">
                      Thuê Máy Tính
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[2] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("2");
                    }}
                  >
                    <Link className="nav-link" to="/nav">
                      Nạp Tiền
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[3] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("3");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Đơn Hàng
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[4] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("4");
                    }}
                  >
                    <Link className="nav-link" to="#">
                      Quản Lý Log
                    </Link>
                  </li>
                  <li
                    className={
                      this.state.arr[5] === true
                        ? "nav-item active"
                        : "nav-item"
                    }
                    onClick={() => {
                      this.handleActive("5");
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
