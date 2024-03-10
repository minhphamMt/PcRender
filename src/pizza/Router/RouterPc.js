import React, { Component } from "react";
import "./Router.scss";
import { Link } from "react-router-dom";

class RouterPc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: "", // State để lưu trữ liên kết đang được chọn
    };
  }

  // Hàm xử lý sự kiện khi liên kết được nhấp
  handleLinkClick = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    return (
      <div className="container-fuild">
        <div className="container">
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
        </div>
      </div>
    );
  }
}

export default RouterPc;
