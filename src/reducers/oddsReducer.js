import {
  ODDS_REQUEST,
  ODDS_SUCCESS,
  ODDS_FAILURE
} from '../actions/otherActionTypes'

const initialState = {
  odds: []
}

export const oddsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ODDS_REQUEST:
      return {
        ...state
      }
    case ODDS_SUCCESS:
      return {
        ...state,
        odds: action.odds
      }
    case ODDS_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}
