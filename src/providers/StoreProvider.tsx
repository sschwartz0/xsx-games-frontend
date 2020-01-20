import React, { useReducer, useContext } from "react";
import { isEmpty } from "lodash";

import { api as apiConstructor, Action } from "../api";
import { rootReducer, initialState, RootReducer } from "./store/rootReducer";

type API = {
  get: {
    games: { byId: (id: string) => void };
  };
  set: {
    user: { logIn: () => void; logOut: () => void };
  };
};

// we need to define this outside of the storeprovider so that we can conduct a check
// in the provider. if we redefine this variable inside of the storeprovider then
// when we use it (with useEffect) it will be considered as a new variable and will
// create an infinite loop
const api: any = {};

const StoreContext = React.createContext(
  {} as { reducer: RootReducer; api: API }
);

// run through different API methods and create the endpoints object
const createApiMethod = (
  method: "get" | "set",
  reducerDispatch: React.Dispatch<Action>
) => {
  if (isEmpty(api[method])) {
    // here we create a functional API by taking our api and passing the dispatch
    api[method] = Object.entries(apiConstructor[method]).reduce(
      (acc, [group, endpoints]) => {
        const actions = Object.entries(endpoints).reduce(
          (acc, [endpointName, endpointFunction]) => ({
            ...acc,
            [endpointName]: (endpointFunction as any)(reducerDispatch),
          }),
          {}
        );

        return {
          ...acc,
          [group]: actions,
        };
      },
      {}
    );
  }
};

export const StoreProvider: React.FC<{}> = ({ children }) => {
  const [reducer, reducerDispatch] = useReducer(rootReducer, initialState);
  createApiMethod("get", reducerDispatch);
  createApiMethod("set", reducerDispatch);

  return (
    <StoreContext.Provider value={{ reducer, api }}>
      {children}
    </StoreContext.Provider>
  );
};

interface UseStore {
  reducer: RootReducer;
  api: API;
}

export const useStore = (): UseStore => {
  const { reducer, api } = useContext(StoreContext);

  return { reducer, api };
};

// export const withStore = (Component: any) => {
//   return (props: any) => {
//     const { reducer, api } = useStore("games");

//     return <Component reducer={reducer} api={api} {...props} />;
//   };
// };
