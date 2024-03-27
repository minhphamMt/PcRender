import React from "react";
import "./rentPc.scss";
class RentPc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rentPc = this.props.rent;
    return (
      <div className="container RentPc">
        <div className="box-rent " key={rentPc.id}>
          <table className="table table-hover ">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Số máy</th>
                <th>Tên Pc</th>
                <th>Thời gian thuê</th>
                <th>Số tiền thuê</th>
                <th>Dòng máy</th>
                <th>Ngày thuê</th>
              </tr>
            </thead>
            <tbody>
              {rentPc && rentPc.length > 0 ? (
                rentPc.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.time}</td>
                    <td>{item.money}</td>
                    <td>{item.namePc}</td>
                    <td>{item.date}</td>
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
                    Hiện chưa có Pc nào được thuê hãy tạo và thuê Pc của bạn nào
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

export default RentPc;
