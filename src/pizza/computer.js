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
      index: 1,
    };
  }

  handleActive = (message, arrcoppy) => {
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arrCheck1 = [].concat(
      ...[...arrcoppy, ...arrGame, ...arrChorme, ...arrRenderAi, ...arrGiaLap01]
    );
    const filteredArr = arrCheck1.filter((item) => item === true);
    console.log(">>>Check arr:", arrCheck1);
    if (filteredArr.length > 1) {
      toast.info("Vui lòng chỉ chọn 1 Pc !", {
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
    this.setState({
      arr: arrcoppy,
    });
  };

  handleGame = (message, arrcoppy) => {
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arrCheck1 = [].concat(
      ...[...arr, ...arrcoppy, ...arrChorme, ...arrRenderAi, ...arrGiaLap01]
    );
    const filteredArr = arrCheck1.filter((item) => item === true);
    console.log(">>>Check arr:", arrCheck1);
    if (filteredArr.length > 1) {
      toast.info("Vui lòng chỉ chọn 1 Pc !", {
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
    this.setState({
      arrGame: arrcoppy,
    });
  };

  handleChorme = (message, arrcoppy) => {
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arrCheck1 = [].concat(
      ...[...arr, ...arrGame, ...arrcoppy, ...arrRenderAi, ...arrGiaLap01]
    );
    const filteredArr = arrCheck1.filter((item) => item === true);
    console.log(">>>Check arr:", arrCheck1);
    if (filteredArr.length > 1) {
      toast.info("Vui lòng chỉ chọn 1 Pc !", {
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
    this.setState({
      arrChorme: arrcoppy,
    });
  };

  handleRenderAi = (message, arrcoppy) => {
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arrCheck1 = [].concat(
      ...[...arr, ...arrGame, ...arrChorme, ...arrcoppy, ...arrGiaLap01]
    );
    const filteredArr = arrCheck1.filter((item) => item === true);
    console.log(">>>Check arr:", arrCheck1);
    if (filteredArr.length > 1) {
      toast.info("Vui lòng chỉ chọn 1 Pc !", {
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
    this.setState({
      arrRenderAi: arrcoppy,
    });
  };

  handleGiaLap01 = (message, arrcoppy) => {
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arrCheck1 = [].concat(
      ...[...arr, ...arrGame, ...arrChorme, ...arrRenderAi, ...arrcoppy]
    );
    const filteredArr = arrCheck1.filter((item) => item === true);
    console.log(">>>Check arr:", arrCheck1);
    if (filteredArr.length > 1) {
      toast.info("Vui lòng chỉ chọn 1 Pc !", {
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
      if (!this.state.name) {
        toast.warn("Vui lòng nhập tên Pc bạn mong muốn ", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        break;
      }
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
          break;
        }
        if (currentArray[i] === "ready") {
          let arrCheck = this.props.arrCheck;
          let arrCheck1 = [arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01];
          let isPcFull = false;

          for (let a = 0; a < arrCheck.length; a++) {
            let arrChild = arrCheck[a];
            let arrChild1 = arrCheck1[a];
            for (let j = 0; j < arrChild.length; j++) {
              if (arrChild[j] === arrChild1[j] && arrChild1[j] === true) {
                toast.warn("PC đã được tạo trước đó. Vui lòng chọn PC khác!", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: "colored",
                });
                isPcFull = true;
                break;
              }
            }
            if (isPcFull) {
              break;
            }
          }
          if (!isPcFull) {
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
    }
  };

  handleOnChangeName = (event) => {
    let value = event.target.value;
    this.setState({
      name: value,
    });
  };
  render() {
    let { arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } = this.state;
    const arrCheck1 = [].concat(
      ...[...arr, ...arrGame, ...arrChorme, ...arrRenderAi, ...arrGiaLap01]
    );
    return (
      <>
        <div className="header-form container  col-12">
          {" "}
          {/* <button
            className="btn btn-primary "
            onClick={() => {
              this.handleClick();
            }}
          >
            Tạo Pc
          </button> */}
          <button
            alt="Tạo Pc"
            onClick={() => {
              this.handleClick();
            }}
          >
            <i>T</i>
            <i>ạ</i>
            <i>o</i>
            <i>&nbsp;</i>
            <i>P</i>
            <i>c</i>
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
                  arrbig={arrCheck1}
                />
              </Route>
              <Route path="/gamming">
                <Gamming
                  arr={this.state.arrGame}
                  handleActivePa={this.handleGame}
                  mes={this.state.mesGame}
                  arrbig={arrCheck1}
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
