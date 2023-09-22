// import { ADD_MATCH, VIEW_MATCHES } from './types';
import * as types from '../types';

export const addMatch = (matchData) => ({
  type: types.ADD_MATCH,
  payload: matchData,
});

export const viewMatches = () => ({
  type: types.VIEW_MATCHES,
});
