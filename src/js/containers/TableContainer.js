import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import { sortBy } from "../actions/actions";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.props.sortBy(key);
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

function mapDispatchToProps(dispatch) {
  return {
    sortBy: function(key) {
      dispatch(sortBy(key));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
