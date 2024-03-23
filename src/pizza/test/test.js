import React, { Component } from "react";
import { QrReader } from "react-qr-reader";

class QRScanner extends Component {
  state = {
    result: "",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
      alert("QR Code scanned: " + data);
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "200px", height: "200px" }}
        />
        {this.state.result && <p>Last scanned data: {this.state.result}</p>}
      </div>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <div>
        <h1>QR Code Scanner</h1>
        <QRScanner />
      </div>
    );
  }
}

export default Test;
