import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatchType = typeof store.dispatch

export type RootStateType = ReturnType<typeof store.getState>