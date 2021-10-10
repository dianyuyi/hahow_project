import axios from "axios"
import {api} from '../constants/Backend'

export const FETCH_HEROLIST = 'FETCH_HEROLIST'
export const FETCH_HEROLIST_SUCCESS = 'FETCH_HEROLIST_SUCCESS'
export const FETCH_HEROLIST_FAILURE = 'FETCH_HEROLIST_FAILURE'


export const getHeroList = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_HEROLIST });
    const { data } = await axios.get(api.list.get);
    dispatch({ type: FETCH_HEROLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HEROLIST_FAILURE, payload: error.message });
  }
};