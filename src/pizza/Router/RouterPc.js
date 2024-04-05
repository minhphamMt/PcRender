import React, { Component } from "react";
import "./Router.scss";
import { Link } from "react-router-dom";

class RouterPc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "",
      isDropdownOpen: false,
    };
  }
  componentDidMount() {
    this.setState({ activeLink: "/gialap" });
  }

  handleLinkClick = (link) => {
    this.setState({ activeLink: link });
  };
  // Hàm xử lý khi click vào button dropdown
  handleDropdownClick = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen, // Đảo ngược trạng thái dropdown
    }));
  };

  // Hàm xử lý khi click vào dropdown content
  handleDropdownContentClick = (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên button
  };

  render() {
    return (
      <div className="container-fuild kkkk">
        {/* <div className="container">
          <div className="nav-container">
            <nav className="navbar navbar-expand-sm  navbar-light">
              <div className="container-fluid">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.activeLink === "/gialap"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/gialap"
                      onClick={() => this.handleLinkClick("/gialap")}
                    >
                      pc giả lập
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.activeLink === "/gamming"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/gamming"
                      onClick={() => this.handleLinkClick("/gamming")}
                    >
                      PC gamming Render
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.activeLink === "/renderai"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/renderai"
                      onClick={() => this.handleLinkClick("/renderai")}
                    >
                      PC render AI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.activeLink === "/chorme"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/chorme"
                      onClick={() => this.handleLinkClick("/chorme")}
                    >
                      PC chorme
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.state.activeLink === "/gialap-01"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/gialap-01"
                      onClick={() => this.handleLinkClick("/gialap-01")}
                    >
                      PC giả lập-01
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div> */}
        <div className="box-dropdown">
          <div className="dropdown">
            <button
              className="dropdown__button"
              onClick={this.handleDropdownClick} // Thêm sự kiện onclick cho button dropdown
            >
              Dropdown
            </button>
            {/* Sử dụng trạng thái isDropdownOpen để quyết định liệu dropdown content có hiển thị hay không */}
            <div
              className={
                this.state.isDropdownOpen
                  ? "dropdown__content show"
                  : "dropdown__content"
              }
              onClick={this.handleDropdownContentClick} // Thêm sự kiện onclick cho dropdown content
            >
              <ul className="nav justify-content-center">
                <li className="nav-item" onClick={this.handleDropdownClick}>
                  <Link
                    className={
                      this.state.activeLink === "/gialap"
                        ? "nav-link  active"
                        : "nav-link"
                    }
                    to="/gialap"
                    onClick={() => this.handleLinkClick("/gialap")}
                  >
                    PC giả lập
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleDropdownClick}>
                  <Link
                    className={
                      this.state.activeLink === "/gamming"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/gamming"
                    onClick={() => this.handleLinkClick("/gamming")}
                  >
                    PC gamming Render
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleDropdownClick}>
                  <Link
                    className={
                      this.state.activeLink === "/renderai"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/renderai"
                    onClick={() => this.handleLinkClick("/renderai")}
                  >
                    PC render AI
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleDropdownClick}>
                  <Link
                    className={
                      this.state.activeLink === "/chorme"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/chorme"
                    onClick={() => this.handleLinkClick("/chorme")}
                  >
                    PC chorme
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleDropdownClick}>
                  <Link
                    className={
                      this.state.activeLink === "/gialap-01"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/gialap-01"
                    onClick={() => this.handleLinkClick("/gialap-01")}
                  >
                    PC giả lập-01
                  </Link>
                </li>
              </ul>
              {/* <a href="#" className="dropdown__content__item">
                Item 1
              </a>
              <a href="#" className="dropdown__content__item">
                Item 2
              </a>
              <a href="#" className="dropdown__content__item">
                Item 3
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RouterPc;
