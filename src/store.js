import React from "react"
import { applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { userReducer } from "./reducers/UserReducer"
import { authReducer } from "./reducers/AuthReducer"

export const createCommonStore = (trackStore=false) => {
    const reducers = combineReducers({
        user: userReducer,
        user: authReducer
    });

    //noinspection JSUnresolvedVariable
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // const store = createStore(reducers,
    //     compose(
    //         applyMiddleware(thunk),
    //         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )
    // );

    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
        // applyMiddleware(...thunk),
    );

    if (trackStore) {
        store.subscribe((() => {
            console.log("  store changed", store.getState());
        }));
    }

    const store = createStore(reducers, enhancer);

    return store;
};