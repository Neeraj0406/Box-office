import { useEffect, useReducer } from "react";

const showsReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD": {
      return [...prevState, action.showId];
    }
    case "REMOVE": {
      return prevState.filter((showId) => showId !== action.showId);
    }
    default:
      return prevState;
  }
};

function usePersisted(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useShow(key = "shows") {
  return usePersisted(showsReducer, [], key);
}
