import {createContext, useContext, useReducer, useEffect} from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
  isFetching: false,
  messages: null,
};

function reducer(state, {type, payload}) {
  switch (type) {
    case "REGISTER_FAILURE":
      return {
        ...state,
        messages: payload,
      };
    case "CREDENTIALS_FAILURE":
      return {
        ...state,
        messages: payload,
      };
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        messages: payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: payload.user,
        blogs: payload.blogs,
        isFetching: false,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: null,
      };

    default:
      break;
  }
}

const Context = createContext();

export function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(state.blogs));
  }, [state.blogs]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        blogs: state.blogs,
        isLogin: state.isLogin,
        messages: state.messages,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useContextAPI = () => useContext(Context);
