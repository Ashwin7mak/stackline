import React, { Component } from "react";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="product-container">{/* <ProductContainer /> */}</div>
        <div className="chart-container">{/* <ChartContainer /> */}</div>
        <div className="table-container">{/* <TableContainer /> */}</div>
        <div className="header-container">{/* <Header /> */}</div>
      </div>
    );
  }
}

export default App;
