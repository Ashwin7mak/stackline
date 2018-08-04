import { SORT, FETCH } from "../../constants";
import axios from "axios";

export const sortBy = key => {
  return {
    type: SORT,
    key
  };
};

export const fetch = data => {
  return {
    type: FETCH,
    data
  };
};

const ax = axios.create({
  baseURL: "http://localhost:3001/"
});

export function fetchData() {
  return dispatch => {
    return ax.get("Webdev_data.json").then(data => {
      console.log(data);
      dispatch(fetch(data[0]));
    });
  };
}
