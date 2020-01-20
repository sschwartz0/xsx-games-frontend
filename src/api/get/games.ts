import { request } from "../request";
import { Dispatch } from "react";
import { Action } from "../";

let previousId: undefined | string = undefined;

export const byId = (dispatch: Dispatch<Action>) => async (id: string) => {
  if (!id || (previousId && previousId === id)) {
    return;
  }

  const response = await request(`games/${id}`);

  dispatch({
    type: "get",
    reducer: "games",
    key: "current",
    value: response,
  });

  previousId = id;
};

export const games = {
  byId,
};
