import React from "react";
import "./LogManage.scss";
class LogManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.seconds,
    };
  }
  //   componentDidMount() {
  //     if (this.props.rent.length > 0) {
  //       this.props.handleLogTime();
  //     }
  //   }
  //   componentDidUpdate(preProps) {
  //     if (this.props.rent !== preProps.rent) {
  //       this.props.handleLogTime();
  //     }
  //   }
  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  render() {
    let rentPc = this.props.rent;
    console.log("....check", this.props.seconds);
    return (
      <div className="container RentPc">
        <table className="table table-hover">
          <thead className="table-primary">
            <tr>
              <th>Số máy</th>
              <th>ID</th>
              <th>Ngày Thuê</th>
              <th>Log</th>
              <th>Thời Gian Log</th>
            </tr>
          </thead>
          <tbody>
            {rentPc && rentPc.length > 0 ? (
              rentPc.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{this.formatTime(this.props.seconds[item.id])}</td>
                </tr>
              ))
            ) : (
              <tr className="">
                <td
                  colSpan="7"
                  className="active"
                  style={{
                    fontSize: "17px",
                  }}
                >
                  Hiện chưa có PC nào được thuê hãy tạo và thuê PC của bạn nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LogManage;
