import {
	FETCH_LEAGUES,
	FETCH_TEAMS,
	GET_ERROR_MESSAGE,
	NULLIFY_ERROR_MESSAGE,
	GET_YEAR_SEASON,
	FILTER_DATE_FROM_TO,
	NULLIFY_YEAR_SEASON
} from "../types"

const initialState = {
	leagues: [],
	teams: [],
	errorMessage: '',
	season: '',
	dateFromTo: {
		from: '',
		to: ''
	}
}

const leaguesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_LEAGUES: {
			return { ...state, leagues: action.payload }
		}
		case FETCH_TEAMS: {
			return { ...state, teams: action.payload }
		}
		case GET_YEAR_SEASON: {
			return { ...state, season: action.payload }
		}
		case NULLIFY_YEAR_SEASON: {
			return { ...state, season: '' }
		}
		case FILTER_DATE_FROM_TO: {
			return { ...state, dateFromTo: action.payload }
		}

		case GET_ERROR_MESSAGE: {
			return { ...state, errorMessage: action.payload }
		}
		case NULLIFY_ERROR_MESSAGE: {
			return { ...state, errorMessage: '' }
		}

		default:
			return state
	}
}
export default leaguesReducer;