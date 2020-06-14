import {
  LOADING_TRUE,
  LOADING_FALSE
} from './otherActionTypes'

export const isLoading = () => {
  return {
    type: LOADING_TRUE
  }
}

export const isNotLoading = () => {
  return {
    type: LOADING_FALSE
  }
}
