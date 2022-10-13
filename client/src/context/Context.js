import {createContext, useContext, useReducer} from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: [],
};

function reducer(state, {type, payload}) {}

const Context = createContext();

export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <Context.Provider>{children}</Context.Provider>;
}

export const useContextAPI = () => useContext(Context);
