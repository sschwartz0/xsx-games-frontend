import React, { useReducer, useContext } from "react";
import { set } from "lodash";
import { api } from "../api";

const StoreContext = React.createContext(undefined as any);

interface RootReducer {
  games: {
    [index: string]: {
      current: {};
    };
  };
  user: {
    [index: string]: {
      loggedIn: boolean;
    };
  };
}

interface Action {
  type: string;
  reducer: string;
  key: string;
  value: any;
}

const initialState = {
  games: {},
  user: {},
};

const rootReducer = (state: RootReducer, action: Action) => {
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

export const StoreProvider: React.FC<{}> = ({ children }) => {
  const [reducer, reducerDispatch] = useReducer(rootReducer, initialState);

  const gamesApiGet = Object.entries(api).reduce(
    (acc, [endpoint, endpointFunction]) => ({
      ...acc,
      [endpoint]: endpointFunction(reducerDispatch),
    }),
    {}
  );

  return (
    <StoreContext.Provider value={{ reducer, gamesApiGet }}>
      {children}
    </StoreContext.Provider>
  );
};

interface UseStore {
  reducer: any;
  gamesApiGet: {
    game: (id: string) => void;
    loggedIn: (isLoggedIn: boolean) => void;
  };
}

export const useStore = (reducerName: string): UseStore => {
  const { reducer, gamesApiGet } = useContext(StoreContext);

  return { reducer: reducer[reducerName], gamesApiGet };
};

// export const withStore = (Component: any) => {
//   return (props: any) => {
//     const { reducer, gamesApiGet } = useStore("games");

//     return <Component reducer={reducer} gamesApiGet={gamesApiGet} {...props} />;
//   };
// };
