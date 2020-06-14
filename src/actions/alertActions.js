import { ADD_ALERT } from './otherActionTypes'

export const addAlert = (variant, message) => {
  return {
    type: ADD_ALERT,
    variant,
    message
  }
}
