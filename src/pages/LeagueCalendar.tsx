import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getLeague } from './../requests/getData';
import Loading from "../components/Loading";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import TableLeagueMatches from "../components/TableLeagueMatches";
import CustomSelect from "../components/Select";
import { connect } from "react-redux";
import { getErrorMessage, nullifyErrorMessage, nullifyYearSeason } from "../redux/actions"
import CustomDatePicker from "../components/DatePicker";


export interface matchesInterface {
	[x: string]: any;
	id: number | string,
	awayTeam: any,
	homeTeam: any,
	winner: string,
	endDate: string,
	startDate: string,
	status: string
}

const LeagueCalendar = (props: any) => {

	const { season, getErrorMessage, nullifyErrorMessage, errorMessage, nullifyYearSeason } = props

	const [league, setLeague] = useState("")
	const [title, setTitle] = useState("")
	const [count, setCount] = useState("")
	const [id, setId] = useState('')
	const [yearSeason, setYearSeason] = useState('')


	const history = useHistory()

	const getMatches = (idLeague: any, seasonLeague?: any) => {
		let year = '';

		if (seasonLeague) {
			year = seasonLeague;
		}

		try {
			getLeague(idLeague, year).then(result => {
				if (result.message) {
					return getErrorMessage(result.message);
				}
				const matches = result.matches.map((item: matchesInterface) => {
					return {
						id: item.id,
						awayTeam: item.awayTeam.name,
						homeTeam: item.homeTeam.name,
						winner: item.score.winner,
						startDate: item.season.startDate,
						endDate: item.season.endDate,
						status: item.status
					}
				})
				nullifyErrorMessage()
				setLeague(matches)
				setTitle(result.competition.name)
				setCount(result.count)
			})
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		setYearSeason('')
		const id = history.location.pathname.substr(9)
		const seasonId = history.location.search.substr(-4);

		console.log('history.location.search.length ', history.location.search.length);

		if (history.location.search.length) {
			setYearSeason(history.location.search.substr(-4))
		} else {
			setYearSeason('')
		}
		// setId(id)

		if (id && seasonId) {
			getMatches(id, seasonId);
		} else if (id && season) {
			getMatches(id, season);
		} else if (id) {
			getMatches(id);
		}
	}, [season])

	console.log('yearSeason ', yearSeason)
	console.log('season ', season)


	if (!league && !errorMessage) {
		return <Loading />
	}
	return (
		<>
			<h1>{title ? <><SportsSoccerIcon /> <span>{title} - {errorMessage ? 0 : count} матчей</span></> : ""}</h1>
			<form onSubmit={(event) => event.preventDefault()}>
				<CustomSelect startValue={yearSeason ? yearSeason : ""} />
			</form>
			<h3 style={{ marginTop: "0" }}>или</h3>
			<CustomDatePicker />
			{
				errorMessage
					?
					<h1 style={{ marginTop: '50px' }}>{errorMessage}</h1>
					:
					< TableLeagueMatches dataTable={league} />
			}
		</>
	)
}


const mapStateToProps = (state: any) => ({
	loading: state.app.loading,
	season: state.leagues.season,
	errorMessage: state.leagues.errorMessage
})
const mapDispatchToProps = (dispatch: any) => {
	return {
		getErrorMessage: (response: string) => dispatch(getErrorMessage(response)),
		nullifyErrorMessage: () => dispatch(nullifyErrorMessage()),
		nullifyYearSeason: () => dispatch(nullifyYearSeason()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueCalendar);