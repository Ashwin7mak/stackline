import { SORT, FETCH } from "../../constants";
import axios from "axios";

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

// Uploaded provided JSON (Webdev_data.json) to myjson.com for test purposes.
export function fetchData() {
  return dispatch => {
    return axios.get("https://api.myjson.com/bins/126og8")
      .then(res => {
        // console.log("JSON array logged for test purposes:", JSON.parse(res.request.response));
        const json = JSON.parse(res.request.response)[0];
        return dispatch(fetchAction(json));
    })
      .catch(err => {
        console.log(err);
        return dispatch(fetchAction({}));
      });
  };
}
