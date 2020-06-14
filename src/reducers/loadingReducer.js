import {
  LOADING_TRUE,
  LOADING_FALSE
} from '../actions/otherActionTypes'

const initialState = {
  isLoading: false
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        ...state,
        isLoading: true
      }
    case LOADING_FALSE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
