import { combineReducers } from 'redux'
import rgb from './rgbReducer'
import session from './session/reducer'

export default combineReducers({ rgb, session })
