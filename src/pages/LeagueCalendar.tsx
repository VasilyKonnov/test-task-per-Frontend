import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getLeague } from './../requests/getData';
import Loading from "../components/Loading";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import TableLeagueMatches from "../components/TableLeagueMatches";
import CustomSelect from "../components/Select";
import { connect } from "react-redux";
import {
	getErrorMessage,
	nullifyErrorMessage,
	nullifyYearSeason,
	getDateFromTo,
	nullifyDateFromTo
} from "../redux/actions";
import CustomDatePicker from "../components/DatePicker";
import { Button } from "@material-ui/core";


// TODO: Вынести интерфейсы в отдельный файл 
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

export interface objectSearchFromTo {
	dateFrom: number | string,
	dateTo: number | string,
}

const LeagueCalendar = (props: any) => {
	const {
		season,
		getErrorMessage,
		nullifyErrorMessage,
		errorMessage,
		nullifyYearSeason,
		dateFromTo
	} = props
	const [league, setLeague] = useState("")
	const [title, setTitle] = useState("")
	const [count, setCount] = useState("")
	const [id, setId] = useState('')
	const [yearSeason, setYearSeason] = useState('')
	const [fromTo, setFromTo] = useState({ dateFrom: '', dateTo: '' })

	const history = useHistory()

	const getMatches = (idLeague: any, seasonLeague?: any, getDateFromToLeague?: any) => {
		let year = '';
		if (seasonLeague) {
			year = seasonLeague;
		}
		let fromTo = '';
		if (getDateFromToLeague) {
			fromTo = getDateFromToLeague;
		}
		try {
			getLeague(idLeague, year, fromTo).then(result => {

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

	const getMatchesFromTo = (id: number | string, dateFromTo: objectSearchFromTo) => {
		nullifyYearSeason()
		setFromTo({ dateFrom: '', dateTo: '' })
		history.push(`?dateFrom=${dateFromTo.dateFrom}&dateTo=${dateFromTo.dateTo}`)
		getMatches(id, null, dateFromTo)
	}

	useEffect(() => {
		setYearSeason('')
		setFromTo({ dateFrom: '', dateTo: '' })

		const id = history.location.pathname.substr(9)
		setId(id)

		let idSeason = '';
		let idDateFromTo = {
			dateFrom: '',
			dateTo: ''
		}
		setFromTo({ dateFrom: '', dateTo: '' })
		setYearSeason('')

		if (history.location.search.substr(1, 8) === 'dateFrom') {

			console.log('history.location.search.substr(1, 8) - ', history.location.search.substr(1, 8));
			idDateFromTo = {
				dateFrom: history.location.search.substr(10, 10),
				dateTo: history.location.search.substr(-10)
			}
			setFromTo({
				dateFrom: history.location.search.substr(10, 10),
				dateTo: history.location.search.substr(-10)
			})
		}

		if (history.location.search.substr(1, 6) === 'season') {

			console.log('history.location.search.substrsubstr(1, 6) - ', history.location.search.substr(1, 6))

			idSeason = history.location.search.substr(-4);
			setYearSeason(history.location.search.substr(-4))
		}

		if (id && idDateFromTo.dateFrom.length && idDateFromTo.dateTo.length) {
			getMatches(id, null, idDateFromTo)
		} else if (id && idSeason) {
			getMatches(id, idSeason);
		} else if (id && season) {
			getMatches(id, season);
		} else if (id) {
			getMatches(id);
		}

	}, [season, dateFromTo])

	console.log('fromTo ', fromTo)
	console.log('dateFromTo ', dateFromTo)

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
			<CustomDatePicker
				starDateFromTo={fromTo.dateFrom.length && fromTo.dateTo.length ? fromTo : ""} />
			<Button onClick={() => getMatchesFromTo(id, dateFromTo)}>Поиск</Button>
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
	errorMessage: state.leagues.errorMessage,
	dateFromTo: state.leagues.dateFromTo,
})
const mapDispatchToProps = (dispatch: any) => {
	return {
		getErrorMessage: (response: string) => dispatch(getErrorMessage(response)),
		nullifyErrorMessage: () => dispatch(nullifyErrorMessage()),
		nullifyYearSeason: () => dispatch(nullifyYearSeason()),
		getDateFromTo: (respons: object) => dispatch(getDateFromTo(respons)),
		nullifyDateFromTo: () => dispatch(nullifyDateFromTo()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueCalendar);