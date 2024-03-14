import React, { Component } from "react";
import "./banner.scss";
import { withRouter } from "react-router-dom"; // Thêm withRouter
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import RouterPc from "./Router/RouterPc";
import GiaLap from "./CreateComputer/js/gialap";
import Gamming from "./CreateComputer/js/gamming";
import Chorme from "./CreateComputer/js/chorme";
import RenderAi from "./CreateComputer/js/RenderAi";
import GiaLap01 from "./CreateComputer/js/gialap01";
import { toast } from "react-toastify";

class Computer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      arrGame: [],
      arrChorme: [],
      arrRenderAi: [],
      arrGiaLap01: [],
      //--------------
      active: [],
      mesAi: [],
      mesGame: [],
      meschorme: [],
      mesgl: [],
      name: "",
      computerActive: [],
    };
  }

  handleActive = (message, arrcoppy) => {
    this.setState({
      arr: arrcoppy,
    });
  };

  handleGame = (message, arrcoppy) => {
    this.setState({
      arrGame: arrcoppy,
    });
  };

  handleChorme = (message, arrcoppy) => {
    this.setState({
      arrChorme: arrcoppy,
    });
  };

  handleRenderAi = (message, arrcoppy) => {
    this.setState({
      arrRenderAi: arrcoppy,
    });
  };

  handleGiaLap01 = (message, arrcoppy) => {
    this.setState({
      arrGiaLap01: arrcoppy,
    });
  };
  handleClick = () => {
    let active = this.state.active;
    let mesAi = this.state.mesAi;
    let mesGame = this.state.mesGame;
    let meschorme = this.state.meschorme;
    let mesgl = this.state.mesgl;
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arraysToCheck = [active, mesAi, mesGame, meschorme, mesgl];
    for (let j = 0; j < arraysToCheck.length; j++) {
      const currentArray = arraysToCheck[j];
      const filteredArr = currentArray.filter(
        (item) => item !== undefined && item !== false
      );
      for (let i = 0; i < currentArray.length; i++) {
        if (currentArray[i] === "full") {
          toast.warn("Pc đã full vui lòng chọn Pc khác !", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        if (currentArray[i] === "ready") {
          this.props.handleActiveShow(
            arr,
            arrGame,
            arrChorme,
            arrRenderAi,
            arrGiaLap01
          );
          this.props.handleOnchange(this.state.name);
          this.props.handleSetActive();
          this.props.history.push("/pcactive");
        }
      }
    }
  };
  handleOnChangeName = (event) => {
    let value = event.target.value;
    this.setState({
      name: value,
    });
  };
  render() {
    return (
      <>
        <div className="header-form container  col-12">
          {" "}
          <button
            className="btn btn-primary "
            onClick={() => {
              this.handleClick();
            }}
          >
            Tạo Pc
          </button>
          <div className="form">
            {" "}
            <input
              onChange={(event) => {
                this.handleOnChangeName(event);
              }}
              type="text"
              className="  form-control "
              id="email"
              placeholder="Nhập Tên Pc"
              name="email"
            />
          </div>
        </div>
        <Router>
          <>
            <RouterPc />
            <Switch>
              <Redirect exact from="/computer" to="/gialap" />
              <Route path="/gialap">
                <GiaLap
                  arr={this.state.arr}
                  handleActivePa={this.handleActive}
                  mes={this.state.active}
                />
              </Route>
              <Route path="/gamming">
                <Gamming
                  arr={this.state.arrGame}
                  handleActivePa={this.handleGame}
                  mes={this.state.mesGame}
                />
              </Route>
              <Route path="/chorme">
                <Chorme
                  arr={this.state.arrChorme}
                  handleActivePa={this.handleChorme}
                  mes={this.state.meschorme}
                />
              </Route>
              <Route path="/renderai">
                <RenderAi
                  arr={this.state.arrRenderAi}
                  handleActivePa={this.handleRenderAi}
                  mes={this.state.mesAi}
                />
              </Route>
              <Route path="/gialap-01">
                <GiaLap01
                  arr={this.state.arrGiaLap01}
                  handleActivePa={this.handleGiaLap01}
                  mes={this.state.mesgl}
                />
              </Route>
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default withRouter(Computer);
