import { takeEvery, put, call } from "redux-saga/effects"
import { hideLoader, fetchLeagues, showLoader, nullifyErrorMessage, nullifyYearSeason, nullifyDateFromTo } from "../actions"

import { REQUEST_LEAGUES } from '../types'
import { getLeagues } from "../../requests/getData"


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


export function* sagaWatcher() {
	yield takeEvery(REQUEST_LEAGUES, sagaFetchLeagues)
}