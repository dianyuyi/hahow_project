import {
  FETCH_HEROPROFILE,
  FETCH_HEROPROFILE_SUCCESS,
  FETCH_HEROPROFILE_FAILURE,
  FETCH_HEROID,
  CLEAR_HEROPROFILE,
  DECREASE_ABILITY,
  INCREASE_ABILITY
} from "../actions/heroProfile";

const abilityReducer = (state, action) => {
  switch (action.type) {
    case INCREASE_ABILITY:
      return {
        ...state,
        [action.name]: ++state[action.name]
      }
    case DECREASE_ABILITY:
      return {
        ...state,
        [action.name]: --state[action.name]
      }
    default:
      return state
  }
}

const initialState = {
  id: null,
  profile: {},
  loading: false,
  error: null,
  availablePoints: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROPROFILE:
      return { ...state, loading: true, id: action.id };
    case FETCH_HEROPROFILE_SUCCESS:
      return { ...state, loading: false, profile: action.payload};
    case FETCH_HEROPROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_HEROID:
      return state.id
    case CLEAR_HEROPROFILE:
      return initialState;
    case INCREASE_ABILITY:
      return {
        ...state,
        profile: abilityReducer(state.profile, action),
        availablePoints: --state.availablePoints
      }
    case DECREASE_ABILITY:
      return {
        ...state,
        profile: abilityReducer(state.profile, action),
        availablePoints: ++state.availablePoints
      }
    default:
      return state;
  }
}
