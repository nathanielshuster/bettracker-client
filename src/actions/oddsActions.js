import axios from 'axios'

import {
  ODDS_REQUEST,
  ODDS_SUCCESS,
  ODDS_FAILURE
} from './otherActionTypes'

import { isLoading, isNotLoading } from './loadingActions'
import { addAlert } from './alertActions'

const API_KEY = process.env.REACT_APP_THE_ODDS_API_KEY

export const getOdds = (sport) => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(oddsRequest())
    axios.get(`https://api.the-odds-api.com/v3/odds/?apiKey=${API_KEY}&sport=${sport}&region=us&mkt=h2h`)
      .then(response => {
        const data = response.data.data
        const odds = data.filter(odd => odd.sites.length > 0);
        dispatch(oddsSuccess(odds))
        dispatch(isNotLoading())
      })
      .catch(error => {
        dispatch(oddsFailure(error))
        dispatch(isNotLoading())
        dispatch(addAlert('danger', 'Could not get odds. Please try again.'))
      })
  }
}

export const oddsRequest = () => {
  return {
    type: ODDS_REQUEST
  }
}

export const oddsSuccess = odds => {
  return {
    type: ODDS_SUCCESS,
    odds
  }
}

export const oddsFailure = () => {
  return {
    type: ODDS_FAILURE
  }
}
