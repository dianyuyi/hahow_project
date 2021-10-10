import axios from "axios"
import {api} from '../constants/Backend'

export const FETCH_HEROPROFILE = 'FETCH_HEROPROFILE'
export const FETCH_HEROPROFILE_SUCCESS = 'FETCH_HEROPROFILE_SUCCESS'
export const FETCH_HEROPROFILE_FAILURE = 'FETCH_HEROPROFILE_FAILURE'
export const FETCH_HEROID = 'FETCH_HEROID'
export const CLEAR_HEROPROFILE = 'CLEAR_HEROPROFILE'
export const INCREASE_ABILITY = 'INCREASE_ABILITY'
export const DECREASE_ABILITY = 'DECREASE_ABILITY'

export const getHeroProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_HEROPROFILE });
    const { data } = await axios.get(api.hero.getProfile(id));
    dispatch({ type: FETCH_HEROPROFILE_SUCCESS, payload: data, id: id });
  } catch (error) {
    dispatch({ type: FETCH_HEROPROFILE_FAILURE, payload: error.message });
  }
}

export const getHeroId = (id) => ({
  type: FETCH_HEROID,
  id
})

export const clearHeroProfile = () => ({
  type: CLEAR_HEROPROFILE
})

export const increaseAbility = (name) => ({
  type: INCREASE_ABILITY,
  name
})

export const decreaseAbility = (name) => ({
  type: DECREASE_ABILITY,
  name
})


