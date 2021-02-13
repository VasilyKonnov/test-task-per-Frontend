import {
	SHOW_LOADER,
	HIDE_LOADER,
	REQUEST_LEAGUES,
	FETCH_LEAGUES,
	GET_ERROR_MESSAGE,
	NULLIFY_ERROR_MESSAGE,
	NULLIFY_YEAR_SEASON,
	GET_YEAR_SEASON,
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