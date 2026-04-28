import { legacy_createStore } from "redux";
import nameReducer from "../reducers/nameReducer";
const mystore = legacy_createStore(nameReducer);

mystore.subscribe(() => {
  console.log(mystore.getState());
});

export default mystore;
