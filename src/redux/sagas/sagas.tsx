import { takeEvery, put, call } from "redux-saga/effects"
import {
	hideLoader,
	fetchLeagues,
	showLoader,
	nullifyErrorMessage,
	nullifyYearSeason,
	nullifyDateFromTo,
	fetchTeams
} from "../actions"


import { REQUEST_LEAGUES, REQUEST_TEAMS } from '../types'
import { getLeagues, getTeams } from "../../requests/getData"

export function* sagaFetchLeagues() {
	try {
		yield put(nullifyYearSeason())
		yield put(nullifyDateFromTo())
		yield put(nullifyErrorMessage())
		yield put(showLoader())
		const payload = yield call(getLeagues)
		yield put(fetchLeagues(payload))
		yield put(hideLoader())
	} catch (error) {
		console.log(error)
		yield put(hideLoader())
	}
}
export function* sagaFetchTeams() {
	try {
		yield put(nullifyYearSeason())
		yield put(nullifyDateFromTo())
		yield put(nullifyErrorMessage())
		yield put(showLoader())
		const payload = yield call(getTeams)
		yield put(fetchTeams(payload))
		yield put(hideLoader())
	} catch (error) {
		console.log(error)
		yield put(hideLoader())
	}
}


export function* sagaWatcher() {
	yield takeEvery(REQUEST_LEAGUES, sagaFetchLeagues)
	yield takeEvery(REQUEST_TEAMS, sagaFetchTeams)
}