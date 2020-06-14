import axios from 'axios'

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
} from './eventActionTypes'

import { isLoading, isNotLoading } from './loadingActions'
import { addAlert } from './alertActions'


const header = {
  Authorization: 'Bearer ' + localStorage.token
}

export const createEvent = (event) => {
  return (dispatch) => {
    dispatch(createEventRequest())
    axios.post('http://localhost:4000/events', event, {
      headers: header
    })
      .then(response => {
        dispatch(createEventSuccess())
        dispatch(addAlert('success', 'Event created.'))
      })
      .catch(error => {
        dispatch(createEventFailure())
        dispatch(addAlert('danger', 'Could not create event.'))
      })
  }
}

export const getEvents = (event) => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(getEventsRequest())
    axios.get('http://localhost:4000/events', {
      headers: header
    })
      .then(response => {
        const data = response.data
        dispatch(getEventsSuccess(data))
        dispatch(isNotLoading())
      })
      .catch(error => {
        dispatch(getEventsFailure())
        dispatch(addAlert('danger', 'Could not get events.'))
        dispatch(isNotLoading())
      })
  }
}

export const deleteEvent = (event) => {
  return (dispatch) => {
    dispatch(deleteEventRequest())
    axios.delete('http://localhost:4000/events', {
      headers: header,
      data: { event }
    })
      .then(response => {
        dispatch(deleteEventSuccess())
        dispatch(addAlert('success', 'Event deleted.'))
      })
      .catch(error => {
        dispatch(deleteEventFailure())
        dispatch(addAlert('danger', 'Could not delete event.'))
      })
  }
}

export const createEventRequest = () => {
  return {
    type: CREATE_REQUEST
  }
}

export const createEventSuccess = () => {
  return {
    type: CREATE_SUCCESS
  }
}

export const createEventFailure = () => {
  return {
    type: CREATE_FAILURE
  }
}

export const getEventsRequest = () => {
  return {
    type: EVENTS_REQUEST
  }
}

export const getEventsSuccess = events => {
  return {
    type: EVENTS_SUCCESS,
    events
  }
}

export const getEventsFailure = () => {
  return {
    type: EVENTS_FAILURE
  }
}

export const deleteEventRequest = () => {
  return {
    type: DELETE_REQUEST
  }
}

export const deleteEventSuccess = () => {
  return {
    type: DELETE_SUCCESS
  }
}

export const deleteEventFailure = () => {
  return {
    type: DELETE_FAILURE
  }
}
