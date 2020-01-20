import { Dispatch } from "react";
import { Action } from "../";

export const logIn = (dispatch: Dispatch<Action>) => async () => {
  dispatch({
    type: "get",
    reducer: "user",
    key: "loggedIn",
    value: true,
  });
};

export const logOut = (dispatch: Dispatch<Action>) => async () => {
  dispatch({
    type: "get",
    reducer: "user",
    key: "loggedIn",
    value: false,
  });
};

export const user = {
  logIn,
  logOut,
};
