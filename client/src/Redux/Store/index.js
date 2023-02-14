import {applyMidleware, createStore} from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/index";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMidleware(thunk))
);

export default store;