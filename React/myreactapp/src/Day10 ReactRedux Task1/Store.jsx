import { createStore } from "redux";
import todoReducer from "./TodoReducer";

const Store = createStore(todoReducer);
export default Store;