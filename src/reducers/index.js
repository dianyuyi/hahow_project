import {combineReducers} from 'redux'
import {reducer as heroListReducer} from './heroList'
import {reducer as heroProfileReducer} from './heroProfile'
import {reducer as updateProfileReducer} from './updateHeroProfile'


const rootReducer = combineReducers({
  heroList: heroListReducer,
  heroProfile: heroProfileReducer,
  updateProfile: updateProfileReducer
})

export default rootReducer
