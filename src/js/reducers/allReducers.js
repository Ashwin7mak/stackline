import { combineReducers } from "redux";
import json from "../../data/Webdev_data.json";
import { SORT } from "../../constants";

const data = json[0];

const direction = {
  weekEnding: "asc",
  retailSales: "asc",
  wholesaleSales: "asc",
  unitsSold: "asc",
  retailerMargin: "asc"
};

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case SORT:
      const key = action.key;

      // Creates copy of state's sales property to avoid mutating state.
      const sales = state.sales.map(salesObj => {
        return Object.assign({}, salesObj);
      });

      // Sorts sales copy by date or number.
      let sortedSales;
      if (key === "weekEnding") {
        sortedSales = sales.sort(
          (a, b) =>
            direction[key] === "asc"
              ? new Date(b[key]).getTime() - new Date(a[key]).getTime()
              : new Date(a[key]).getTime() - new Date(b[key]).getTime()
        );
      } else {
        sortedSales = sales.sort(
          (a, b) =>
            direction[key] === "asc" ? b[key] - a[key] : a[key] - b[key]
        );
      }

      direction[key] = direction[key] === "asc" ? "desc" : "asc";
      return Object.assign({}, state, { sales: sortedSales });
    default:
      return state;
  }
};

const allReducers = combineReducers({
  data: dataReducer
});

export default allReducers;
