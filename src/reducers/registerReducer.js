import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/userActionTypes'

const initialState = {
  newUser: false
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        newUser: true
      }
    case REGISTER_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}
