import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "./home.scss";
import Header from "./header";
import Computer from "./computer";
import { ToastContainer } from "react-toastify";
import HomePage from "./homePage";
import Active from "./PcActive/Active";
import { toast } from "react-toastify";
import RentPc from "./historyRent/rentPc";
import LogManage from "./logmanage/LogManage";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 0,
      index: 1,
      boolean: false,
      name: "",
      arr: [],
      arrGame: [],
      arrChorme: [],
      arrRenderAi: [],
      arrGiaLap01: [],
      number: [],
      activeLink: "",
      nameBank: "",
      rent: [],
      seconds: [],
    };
  }
  handleLogTime = () => {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }, 1000);
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.rent !== prevState.rent) {
      this.state.rent.map((item, index) => {
        if (this.interval) {
          clearInterval(this.interval);
        }
        let coppyseconnd = [...this.state.seconds];
        this.interval = setInterval(() => {
          if (!coppyseconnd[item.id]) {
            coppyseconnd[item.id] = 0;
            coppyseconnd[item.id] = coppyseconnd[item.id] + 1;
            this.setState({
              seconds: [...coppyseconnd],
            });
          } else {
            coppyseconnd[item.id] = coppyseconnd[item.id] + 1;
            this.setState({
              seconds: [...coppyseconnd],
            });
          }
        }, 1000);
      });
    }
  }

  handleDelete = (index, cate, namedelete, type) => {
    let newState = { ...this.state };
    newState[cate][index] = "";
    newState["name"][namedelete] = "0";
    let numberCoppy = newState["number"];
    for (let i = 0; i < numberCoppy.length; i++) {
      let coppy = numberCoppy[i];
      for (let j = 0; j < numberCoppy.length; j++) {
        if (coppy[j] === namedelete + 1) {
          coppy[j] = -1;
        }
      }
    }
    newState["number"] = [...numberCoppy];
    let filter = newState.name.filter((item, index) => {
      return item !== "0";
    });
    if (filter.length === 0) {
      newState["number"] = [];
      newState["name"] = [];
      newState["index"] = 1;
    }
    this.setState({ ...newState });
    if (type === "thue") {
      toast.success("Đã thuê thành công !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Đã xóa thành công !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  handleOnchange = (name) => {
    let arr = [...this.state.name];
    arr.push(name);
    this.setState({
      name: arr,
    });
  };
  handleActiveShow = (arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01) => {
    let arr1 = [...this.state.arr];
    let arr2 = [...this.state.arrGame];
    let arr3 = [...this.state.arrChorme];
    let arr4 = [...this.state.arrRenderAi];
    let arr5 = [...this.state.arrGiaLap01];
    const mergedArray = this.mergeArrays(arr, arr1);
    const mergedArrGame = this.mergeArrays(arrGame, arr2);
    const mergedArrChorme = this.mergeArrays(arrChorme, arr3);
    const mergedArrRenderAi = this.mergeArrays(arrRenderAi, arr4);
    const mergedArrGiaLap01 = this.mergeArrays(arrGiaLap01, arr5);
    this.setState({
      arr: [...mergedArray],
      arrGame: [...mergedArrGame],
      arrChorme: [...mergedArrChorme],
      arrRenderAi: [...mergedArrRenderAi],
      arrGiaLap01: [...mergedArrGiaLap01],
    });
    this.numberActive(
      mergedArray,
      mergedArrGame,
      mergedArrChorme,
      mergedArrRenderAi,
      mergedArrGiaLap01
    );
  };
  mergeArrays = (arr1, arr2) => {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
      result.push(arr1[i] || arr2[i]);
    }
    return result;
  };
  numberActive = (
    mergedArray,
    mergedArrGame,
    mergedArrChorme,
    mergedArrRenderAi,
    mergedArrGiaLap01
  ) => {
    const arrays = [
      mergedArray,
      mergedArrGame,
      mergedArrChorme,
      mergedArrRenderAi,
      mergedArrGiaLap01,
    ];
    let number = [...this.state.number];
    let index = this.state.index;
    for (let i = 0; i < arrays.length; i++) {
      const arrChild = arrays[i];
      if (!number[i]) number[i] = [];
      for (let j = 0; j < arrChild.length; j++) {
        if (arrChild[j] === true && !number[i][j]) {
          if (!number[i]) number[i] = [];
          number[i][j] = index;
          index++;
        }
      }
    }
    this.setState({
      number: number,
      index: index,
    });
  };
  handleSetActive = () => {
    this.setState({
      activeLink: "/pcactive",
    });
  };
  handleSetLink = (link) => {
    this.setState({
      activeLink: link,
    });
  };
  handleResponsive = () => {
    this.setState({
      boolean: !this.state.boolean,
    });
  };
  handleSetName = (name) => {
    this.setState({
      nameBank: name,
    });
  };
  handleChangeCoin = (coin) => {
    this.setState({
      coin: this.state.coin + +coin,
      nameBank: "",
    });
  };
  rentPc = (obj) => {
    let coppyRent = [...this.state.rent];
    coppyRent.push(obj);
    this.setState({
      rent: [...coppyRent],
    });
  };
  render() {
    return (
      <div className="home-page">
        <ToastContainer
          className="toast-container"
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={true}
          theme="light"
          transition={Zoom}
          closeButton={false}
        />
        <Router>
          <>
            <Header
              coin={this.state.coin}
              boolean={this.state.boolean}
              location={this.props.location}
              activeLink={this.state.activeLink}
              handleSetLink={this.handleSetLink}
              handleResponsive={this.handleResponsive}
              handleChangeCoin={this.handleChangeCoin}
            />
            <Switch>
              <Redirect exact from="/" to="/computer" />
              <Route path="/bank">
                <HomePage
                  handleSetName={this.handleSetName}
                  name={this.state.nameBank}
                  handleChangeCoin={this.handleChangeCoin}
                />
              </Route>
              <Route path="/computer">
                <Computer
                  handleOnchange={this.handleOnchange}
                  handleActiveShow={this.handleActiveShow}
                  boolean={this.state.boolean}
                  handleSetActive={this.handleSetActive}
                  arrCheck={[
                    this.state.arr,
                    this.state.arrGame,
                    this.state.arrChorme,
                    this.state.arrRenderAi,
                    this.state.arrGiaLap01,
                  ]}
                />
              </Route>
              <Route path="/pcactive">
                <Active
                  name={this.state.name}
                  arr={this.state.arr}
                  arrGame={this.state.arrGame}
                  arrChorme={this.state.arrChorme}
                  arrRenderAi={this.state.arrRenderAi}
                  arrGiaLap01={this.state.arrGiaLap01}
                  number={this.state.number}
                  handleSetActive={this.handleSetActive}
                  handleDelete={this.handleDelete}
                  rentPc={this.rentPc}
                  coin={this.state.coin}
                />
              </Route>
              <Route path="/rentPc">
                <RentPc rent={this.state.rent}></RentPc>
              </Route>
              <Route path="/logPc">
                <LogManage
                  rent={this.state.rent}
                  seconds={this.state.seconds}
                  handleLogTime={this.handleLogTime}
                />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default Home;
