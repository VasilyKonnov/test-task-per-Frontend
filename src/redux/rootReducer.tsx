import { combineReducers } from "redux"
import appReducer from "./reducers/appReducer"
import matchesReducer from './reducers/matchesReducer';

const rootReducer = combineReducers({
	leagues: matchesReducer,
	app: appReducer
})

export default rootReducer;