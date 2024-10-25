import { createStore, applyMiddleware } from "redux";

//import { rootReducer } from "../reducer/rootReducer";
//import { composeWithDevTools } from "@redux-devtools/extension";
import { moviesReducer } from "../reducer/moviesReducer";
import { thunk } from "redux-thunk";

//1-create store
export const store = createStore(moviesReducer, applyMiddleware(thunk));
