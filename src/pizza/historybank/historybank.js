import React from "react";
import "./historybank.scss";
class HistoryBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let historyBank = this.props.historyBank;
    return (
      <div className="container RentPc">
        <div className="box-rent ">
          <table className="table table-hover ">
            <thead className="table-primary">
              <tr>
                <th>STT</th>
                <th>Thời Gian Nạp</th>
                <th>Nội Dung</th>
                <th>Ngân Hàng</th>
                <th>STK</th>
                <th>Số Tiền</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {historyBank && historyBank.length > 0 ? (
                historyBank.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.time}</td>
                    <td>{item.Content}</td>
                    <td>{item.bank}</td>
                    <td>{item.STK}</td>
                    <td>{item.money}</td>
                    <td style={{ color: "green", fontWeight: "600" }}>
                      {item.status}
                    </td>
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
                    Bạn chưa thực hiện lần nạp tiền nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HistoryBank;
