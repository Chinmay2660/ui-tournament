import * as types from "../types";

const initialState = {
  addMatch: [],
  viewMatches: [],
};

const getView = (state, action) => {
  return {
    ...state,
    viewMatches: action.payload,
  };
};

const getMatch = (state, action) => {
  return {
    ...state,
    Match: action.payload,
  };
};

const reducerFunctions = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MATCH:
      return getMatch(state, action);
    case types.VIEW_MATCHES:
      return getView(state, action);
    default:
      return state;
  }
};

export default reducerFunctions;
