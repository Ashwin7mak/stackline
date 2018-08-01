import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import allReducers from "./js/reducers/allReducers";

// const store = createStore(allReducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
