import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    console.log(key);
  }

  render() {
    const rows = this.props.data.sales ? (
      this.props.data.sales.map(row => {
        return (
          <tr>
            <td>{row.weekEnding}</td>
            <td>{row.retailSales}</td>
            <td>{row.wholesaleSales}</td>
            <td>{row.unitsSold}</td>
            <td>{row.retailerMargin}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td rowspan="5">No data to display</td>
      </tr>
    );

    return <Table rows={rows} sortBy={this.sortBy} />;
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(TableContainer);
