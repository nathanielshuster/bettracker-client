import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE
} from '../actions/userActionTypes'

const initialState = {
  user: {}
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state
      }
    case USER_SUCCESS:
      return {
        ...state,
        user: action.user
      }
    case USER_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}
