import "whatwg-fetch";
import { Middleware } from "redux";

interface GamesAPIAction {
  type: "GamesAPI" | string;
  types: {
    failure: string;
    request: string;
    success: string;
  };
  payload: {
    url: string;
    method: "POST" | "GET";
    data: { [index: string]: any };
  };
}

const getData = async (url: string, data: { [index: string]: any }) => {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const gamesApiMiddleware: Middleware = ({
  dispatch,
  getState,
}) => next => (action: GamesAPIAction) => {
  if (action.type !== "GamesAPI") {
    return;
  }

  const actionWith = (localAction: any) => ({ ...localAction, ...action });

  const {
    types: { failure, request, success },
    payload: { data, method, url },
  } = action;

  // request dispatch
  next(actionWith({ type: request }));

  switch (method) {
    case "GET":
      return getData(url, data)
        .then(
          response => {
            console.log(response);
            next(actionWith({ type: success, response }));
          },
          error => {
            next(actionWith({ type: failure, error }));
          }
        )
        .catch(error => {
          next(actionWith({ type: failure, error }));
        });

    default:
      return;
  }
};
