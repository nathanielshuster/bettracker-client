import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from '../actions/userActionTypes'

const initialState = {
  newSession: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        newSession: true
      }
    case LOGIN_FAILURE:
      return {
        ...state
      }
    case LOGOUT_SUCCESS:
      return {
        ...state
      }
    default:
      return state
  }
}
