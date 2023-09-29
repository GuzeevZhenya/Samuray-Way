import { legacy_createStore as createStore, combineReducers } from "redux";
import { profileReducer } from "./ProfileReducer";
import { dialogReducer } from "./DialogReducer";

let reducers = combineReducers({ profileReducer, dialogReducer });

export let store = createStore(reducers);
