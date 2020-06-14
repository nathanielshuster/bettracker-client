import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  EVENTS_REQUEST,
  EVENTS_SUCCESS,
  EVENTS_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from '../actions/eventActionTypes'

const initialState = {
  events: []
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state
      }
    case CREATE_SUCCESS:
      return {
        ...state
      }
    case CREATE_FAILURE:
      return {
        ...state
      }
    case EVENTS_REQUEST:
      return {
        ...state
      }
    case EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events
      }
    case EVENTS_FAILURE:
      return {
        ...state
      }
    case DELETE_REQUEST:
      return {
        ...state
      }
    case DELETE_SUCCESS:
      return {
        ...state,
      }
    case DELETE_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}
