import { combineReducers } from "redux";
import json from "../../data/Webdev_data.json";

const data = json[0];

const dataReducer = (state = data, action) => {
  return state;
};

const allReducers = combineReducers({
  data: dataReducer
});

export default allReducers;
