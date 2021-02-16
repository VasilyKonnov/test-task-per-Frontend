import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getMatches } from '../requests/getData';
import Loading from "../components/Loading";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PeopleIcon from '@material-ui/icons/People';
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
import { URL_LEAGUES, URL_COMANDS } from './../constants';


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
		dateFromTo,
		url
	} = props

	const [league, setLeague] = useState("")
	const [title, setTitle] = useState("")
	const [count, setCount] = useState("")
	const [idLocalState, setIdLocalState] = useState('')
	const [yearSeason, setYearSeason] = useState('')
	const [fromTo, setFromTo] = useState({ dateFrom: '', dateTo: '' })

	const history = useHistory()

	const getMatchesId = (idLeague: any, seasonLeague?: any, getDateFromToLeague?: any) => {
		let year = '';
		if (seasonLeague) {
			year = seasonLeague;
		}
		let fromTo = '';
		if (getDateFromToLeague) {
			fromTo = getDateFromToLeague;
		}
		try {

			getMatches(url, idLeague, year, fromTo).then(result => {

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
				if (url === URL_LEAGUES) { setTitle(result.competition.name) }
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
		getMatchesId(id, null, dateFromTo)
	}

	useEffect(() => {
		setYearSeason('')
		setFromTo({ dateFrom: '', dateTo: '' })
		let id = "";
		if (url === URL_LEAGUES) { id = history.location.pathname.substr(9) }
		if (url === URL_COMANDS) { id = history.location.pathname.substr(7) }

		setIdLocalState(id)

		let idSeason = '';
		let idDateFromTo = {
			dateFrom: '',
			dateTo: ''
		}
		setFromTo({ dateFrom: '', dateTo: '' })
		setYearSeason('')


		if (history.location.search.substr(1, 6) === 'season') {
			idSeason = history.location.search.substr(-4);
			setYearSeason(history.location.search.substr(-4))
		}


		if (history.location.search.substr(1, 8) === 'dateFrom') {
			idDateFromTo = {
				dateFrom: history.location.search.substr(10, 10),
				dateTo: history.location.search.substr(-10)
			}
			setFromTo({
				dateFrom: history.location.search.substr(10, 10),
				dateTo: history.location.search.substr(-10)
			})
		}


		if (id && idDateFromTo.dateFrom.length && idDateFromTo.dateTo.length) {
			getMatchesId(id, null, idDateFromTo)
		} else if (id && idSeason) {
			getMatchesId(id, idSeason);
		} else if (id && season) {
			getMatchesId(id, season);
		} else if (id) {
			getMatchesId(id);
		}

	}, [season, dateFromTo])

	if (!league && !errorMessage) {
		return <Loading />
	}
	return (
		<>
			<h1><>
				{url === URL_LEAGUES ? <SportsSoccerIcon /> : <PeopleIcon />}
				<span>{title ? title : ""}  {errorMessage ? 0 : count} матчей</span></></h1>

			{url === URL_LEAGUES
				?
				<>
					<CustomSelect startValue={yearSeason ? yearSeason : ""} />
					<h3 style={{ marginTop: "0" }}>или</h3>
				</>
				:
				null
			}


			<CustomDatePicker
				starDateFromTo={fromTo.dateFrom.length && fromTo.dateTo.length ? fromTo : ""}
			/>
			<Button className='search-matches' onClick={() => getMatchesFromTo(idLocalState, dateFromTo)}>Фильтр по дате (с, по)</Button>
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