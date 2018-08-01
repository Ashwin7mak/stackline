import React from "react";

const Table = props => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sortBy("weekEnding")}>
              WEEK ENDING
            </th>
            <th scope="col" onClick={() => props.sortBy("retailSales")}>
              RETAIL SALES
            </th>
            <th scope="col" onClick={() => props.sortBy("wholesaleSales")}>
              WHOLESALE SALES
            </th>
            <th scope="col" onClick={() => props.sortBy("unitsSold")}>
              UNITS SOLD
            </th>
            <th scope="col" onClick={() => props.sortBy("retailerMargin")}>
              RETAILER MARGIN
            </th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
