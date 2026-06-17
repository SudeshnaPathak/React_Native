import { createStore } from "redux";
import bookReducer from "./BookReducer";

const Store = createStore(bookReducer);
export default Store;