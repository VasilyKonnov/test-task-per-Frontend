import {
	SHOW_LOADER,
	HIDE_LOADER,
	REQUEST_LEAGUES,
	FETCH_LEAGUES,
	GET_ERROR_MESSAGE,
	NULLIFY_ERROR_MESSAGE,
	NULLIFY_YEAR_SEASON,
	GET_YEAR_SEASON,
	GET_DATE_FROM_TO,
	NULLIFY_DATE_FROM_TO,
	REQUEST_TEAMS,
	FETCH_TEAMS
} from './types'

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}


export function requestLeagues() {
	return {
		type: REQUEST_LEAGUES
	}
}

export function fetchLeagues(payload: any) {
	return {
		type: FETCH_LEAGUES,
		payload: payload
	}
}

export function getYearSeason(payload: any) {
	return {
		type: GET_YEAR_SEASON,
		payload: payload
	}
}

export function nullifyYearSeason() {
	return {
		type: NULLIFY_YEAR_SEASON
	}
}

export function getDateFromTo(payload: any) {
	return {
		type: GET_DATE_FROM_TO,
		payload: payload
	}
}

export function nullifyDateFromTo() {
	return {
		type: NULLIFY_DATE_FROM_TO
	}
}

export function requestTeams() {
	return {
		type: REQUEST_TEAMS
	}
}

export function fetchTeams(payload: any) {
	return {
		type: FETCH_TEAMS,
		payload: payload
	}
}



export function getErrorMessage(payload: string) {
	return {
		type: GET_ERROR_MESSAGE,
		payload: payload
	}
}
export function nullifyErrorMessage() {
	return {
		type: NULLIFY_ERROR_MESSAGE,
	}
}