import { URL_LEAGUES, URL_COMANDS, API_TOKEN, TARIF } from "../constants"


export const getLeagues = async () => {

	interface Leagues {
		id: number | string,
		name: string
	}

	const response = await fetch(`${URL_LEAGUES}${TARIF}`, {
		method: 'GET',
		headers: {
			'X-Auth-Token': API_TOKEN
		}
	})
		.then(function (response: any) {
			return response.json();
		})
		.then(function (data: any) {
			return data;
		})
		.then((result: any) => {
			const leagues = result.competitions.map((item: Leagues) => {
				return {
					id: item.id,
					name: item.name
				}
			})
			return leagues;
		})
	return await response;
}


export const getMatches = async (url: string, id: number | string, year?: any, dateFromTo?: any) => {

	let urlApi = 'https://api.football-data.org/v2/teams'
	if (url) {
		urlApi = url
	}

	let filterYear = '';
	let filterDateFromTo = '';

	if (year) {
		filterYear = `?season=${year}`
	}
	if (dateFromTo) {
		filterDateFromTo = `?dateFrom=${dateFromTo.dateFrom}&dateTo=${dateFromTo.dateTo}`
	}

	const response = await fetch(`${urlApi}/${id}/matches${filterYear}${filterDateFromTo}`, {
		method: 'GET',
		headers: {
			'X-Auth-Token': API_TOKEN
		}
	}).then(function (response) {
		return response.json()
	}).then(function (data) {
		return data;
	})
	return await response;
}


export const getTeams = async () => {

	interface Teams {
		id: number | string,
		founded: number | string,
		name: string,
		crestUrl: string,
		clubColors: string
	}

	const response = await fetch(`${URL_COMANDS}${TARIF}`, {
		method: 'GET',
		headers: {
			'X-Auth-Token': API_TOKEN
		}
	}).then(function (response) {
		return response.json();
	}).then(function (data) {
		return data;
	}).then((result) => {
		const teams = result.teams.map((team: Teams) => {
			return {
				id: team.id,
				founded: team.founded,
				name: team.name,
				crestUrl: team.crestUrl,
				clubColors: team.clubColors,
			}
		})
		return teams;
	})

	return await response;
}