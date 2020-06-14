import { ADD_ALERT } from '../actions/otherActionTypes'

const initialState = {
  hasAlert: false,
  variant: '',
  message: ''
}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        hasAlert: true,
        variant: action.variant,
        message: action.message
      }
    default:
      return state
  }
}
