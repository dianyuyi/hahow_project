import {
  FETCH_HEROLIST,
  FETCH_HEROLIST_SUCCESS,
  FETCH_HEROLIST_FAILURE,
} from "../actions/heroList";

const initialState = {
  heroes: [],
  loading: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEROLIST:
      return { ...state, loading: true };
    case FETCH_HEROLIST_SUCCESS:
      return { ...state, loading: false, heroes: action.payload };
    case FETCH_HEROLIST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
