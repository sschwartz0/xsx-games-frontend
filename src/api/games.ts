import { request } from "./request";
import { Dispatch } from "react";

interface Action {
  type: string;
  reducer: string;
  key: string;
  value: any;
}

export const game = (dispatch: Dispatch<Action>) => async (id: string) => {
  const response = await request(`games/${id}`);

  dispatch({
    type: "get",
    reducer: "games",
    key: "current",
    value: response,
  });
};

export const loggedIn = (dispatch: Dispatch<Action>) => async (
  isLoggedIn: boolean
) => {
  dispatch({
    type: "get",
    reducer: "user",
    key: "loggedIn",
    value: isLoggedIn,
  });
};
