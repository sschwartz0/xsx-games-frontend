import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { gamesApiMiddleware } from "../modules/middleware/gamesAPI";

const testReducer = (state: any = { test: "hi" }, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialStore = combineReducers({
  test: testReducer,
});

const rootReducer = (state: any, action: any) => initialStore(state, action);

const middlewares = [thunk, gamesApiMiddleware];

export const configureStore = () => {
  const middleware = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, middleware);

  return store;
};
