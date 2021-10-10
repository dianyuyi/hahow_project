import {
  UPDATE_HEROPROFILE,
  UPDATE_HEROPROFILE_SUCCESS,
  UPDATE_HEROPROFILE_FAILURE,
} from "../actions/updateHeroProfile";

const initialState = {
  upLoading: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HEROPROFILE:
      return { ...state, upLoading: true };
    case UPDATE_HEROPROFILE_SUCCESS:
      return { ...state, upLoading: false};
    case UPDATE_HEROPROFILE_FAILURE:
      return { ...state, upLoading: false, error: action.payload };
    default:
      return initialState;
  }
}



