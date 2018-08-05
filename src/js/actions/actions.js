import { SORT, FETCH } from "../../constants";
import axios from "axios";
// import fetch from "node-fetch";

export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};

export const fetchAction = data => {
  return {
    type: FETCH,
    data
  };
};

export function fetchData() {
  return dispatch => {
    return axios.get("https://api.myjson.com/bins/126og8").then(data => {
      console.log(JSON.parse(data.request.response));
      const json = JSON.parse(data.request.response);
      return dispatch(fetchAction(json[0]));
    });
  };
}

// export function fetchData() {
//   return dispatch => {
//     fetch("../../Webdev_data.json").then(data => {
//       console.log(data);
//       dispatch(fetchAction(data[0]));
//     });
//   };
// }
