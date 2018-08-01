import { combineReducers } from "redux";
import data from "../../data/Webdev_data.json";

const dataReducer = (state = data, action) => {
  return state;
};

const allReducers = combineReducers({
  data: dataReducer
});

export default allReducers;
