import { combineReducers } from "redux"
import appReducer from "./reducers/appReducer"
import leaguesReducer from './reducers/leaguesReducer';

const rootReducer = combineReducers({
	leagues: leaguesReducer,
	app: appReducer
})

export default rootReducer;