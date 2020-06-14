import axios from 'axios'
import history from "../history/history";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE
} from './userActionTypes'

import { isLoading, isNotLoading } from './loadingActions'
import { addAlert } from './alertActions'
import { getEventsSuccess } from './eventActions'

const header = {
  Authorization: 'Bearer ' + localStorage.token
}

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(registerRequest())
    axios.post('http://localhost:4000/users', {
      user: user
    })
      .then(response => {
        const data = response.data
        localStorage.setItem('token', data.token)
        dispatch(registerSuccess())
        dispatch(addAlert('success', 'Account created.'))
        history.push('/events')
        dispatch(isNotLoading())
      })
      .catch(error => {
        const message = error.response.data.error
        dispatch(registerFailure())
        dispatch(addAlert('danger', message))
        dispatch(isNotLoading())
      })
  }
}

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(loginRequest())
    axios.post('http://localhost:4000/login', {
      user: user
    })
      .then(response => {
        const data = response.data
        console.log(response)
        localStorage.setItem('token', data.token);
        dispatch(loginSuccess())
        dispatch(getEventsSuccess(data.events))
        dispatch(addAlert('success', 'Logged in.'))
        history.push('/events')
        dispatch(isNotLoading())
      })
      .catch(error => {
        const message = error.response.data.error
        dispatch(loginFailure())
        dispatch(addAlert('danger', message))
        dispatch(isNotLoading())
      })
  }
}

export const getUser = () => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(userRequest())
    axios.get('http://localhost:4000/users', {
      headers: header
    })
      .then(response => {
        const data = response.data
        dispatch(userSuccess(data.user))
        dispatch(isNotLoading())
      })
      .catch(error => {
        const message = error.response.data.error
        dispatch(userFailure())
        dispatch(addAlert('danger', message))
        dispatch(isNotLoading())
      })
  }
}

export const updateUser = (user) => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(updateRequest())
    let config = { headers: header }
    let data = { user: user }
    axios.patch('http://localhost:4000/users', data, config)
      .then(response => {
        dispatch(updateSuccess())
        dispatch(addAlert('success', 'Profile updated.'))
        dispatch(isNotLoading())
      })
      .catch(error => {
        const message = error.response.data.error
        dispatch(updateFailure())
        dispatch(addAlert('danger', message))
        dispatch(isNotLoading())
      })
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  history.push('/')
}

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
}

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  }
}

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE,
  }
}

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  }
}

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

export const userRequest = () => {
  return {
    type: USER_REQUEST
  }
}

export const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    user
  }
}

export const userFailure = () => {
  return {
    type: USER_FAILURE,
  }
}

export const updateRequest = () => {
  return {
    type: UPDATE_REQUEST
  }
}

export const updateSuccess = () => {
  return {
    type: UPDATE_SUCCESS,
  }
}

export const updateFailure = () => {
  return {
    type: UPDATE_FAILURE,
  }
}
