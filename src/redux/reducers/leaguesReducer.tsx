import {
	FETCH_LEAGUES,
	FETCH_TEAMS,
	GET_ERROR_MESSAGE,
	NULLIFY_ERROR_MESSAGE,
	GET_YEAR_SEASON,
	NULLIFY_YEAR_SEASON,
	GET_DATE_FROM_TO,
	NULLIFY_DATE_FROM_TO,
} from "../types"

// TODO: возможно стоит переименовать файл из leaguesReduser во что-то другое

const initialState = {
	leagues: [],
	teams: [],
	errorMessage: '',
	season: '',
	dateFromTo: {}
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
		case GET_DATE_FROM_TO: {
			console.log('GET_DATE_FROM_TO action ', action)
			return { ...state, dateFromTo: action.payload }
		}
		case NULLIFY_DATE_FROM_TO: {
			return { ...state, dateFromTo: "" }
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