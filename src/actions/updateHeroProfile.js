import axios from "axios"
import {api} from '../constants/Backend'

export const UPDATE_HEROPROFILE = 'UPDATE_HEROPROFILE'
export const UPDATE_HEROPROFILE_SUCCESS = 'UPDATE_HEROPROFILE_SUCCESS'
export const UPDATE_HEROPROFILE_FAILURE = 'UPDATE_HEROPROFILE_FAILURE'

export const updateHeroProfile = (id, profile) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HEROPROFILE });
    const { data } = await axios.patch(
      api.hero.updateProfile(id), profile,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    dispatch({ type: UPDATE_HEROPROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_HEROPROFILE_FAILURE, payload: error.message });
  }
}

