import { get, set } from "lodash";

export interface RootReducer {
  games: {
    current: {};
  };

  user: {
    loggedIn: boolean;
  };
}

interface Action {
  type: string;
  reducer: string;
  key: string;
  value: any;
}

export const initialState: RootReducer = {
  games: {
    current: {},
  },
  user: {
    loggedIn: false,
  },
};

export const rootReducer = (
  state: RootReducer = initialState,
  action: Action
) => {
  if (action.value === get(state, `${action.reducer}.${action.key}`)) {
    return state;
  }

  switch (action.type) {
    case "get": {
      const newState = { ...state };

      set(newState, `${action.reducer}.${action.key}`, action.value);

      return newState;
    }

    default:
      return state;
  }
};
