const API_TOKEN = "0d5df8c05978490ea0958129ea7986b4"
const TARIF = "?plan=TIER_ONE"
// TODO: Убрать все консоль-логи


export const getTeams = async () => {
	try {
		const response = await fetch('https://api.football-data.org/v2/teams/', {
			method: 'GET',
			headers: {
				'X-Auth-Token': API_TOKEN
			}
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			return data;
		});
		console.log('getTeams - response', response);
		return await response;
	}
	catch (error) {
		console.log(error)
	}
}

export const getLeagues = async () => {

	interface Leagues {
		id: number | string,
		name: string
	}

	const response = await fetch(`https://api.football-data.org/v2/competitions${TARIF}`, {
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

export const getLeague = async (id: number | string, year?: any, dateFromTo?: any) => {

	let filterYear = '';
	let filterDateFromTo = '';

	if (year) {
		console.log('getLeague year ', year)

		filterYear = `?season=${year}`
	}
	if (dateFromTo) {
		filterDateFromTo = `?dateFrom=${dateFromTo.start}&dateTo${dateFromTo.end}`
	}
	const url = `https://api.football-data.org/v2/competitions/${id}/matches${filterYear}${filterDateFromTo}`

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'X-Auth-Token': API_TOKEN
		}
	}).then(function (response) {
		return response.json()
	}).then(function (data) {
		return data;
	})
	console.log('response ', response)
	return await response;
}