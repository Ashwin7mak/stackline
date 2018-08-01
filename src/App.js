import React, { Component } from "react";
import "./css/App.css";

// Test FA icon
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="product-container">
          {/* <span>
            <FontAwesomeIcon icon={faHome} />
            Overview
          </span> */}

          {/* <ProductContainer /> */}
        </div>
        <div className="chart-container">{/* <ChartContainer /> */}</div>
        <div className="table-container">{/* <TableContainer /> */}</div>
        <div className="header-container">{/* <Header /> */}</div>
      </div>
    );
  }
}

export default App;
