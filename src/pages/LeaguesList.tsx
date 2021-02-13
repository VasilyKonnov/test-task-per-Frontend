import React, { useEffect } from "react";
import { requestLeagues } from "../redux/actions"
import { connect } from "react-redux"
import ItemLeagues from "../components/ItemLeagues";
import Warning from "../components/Warning";
import Loading from "../components/Loading";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';



const LeaguesList = (props: any) => {

	const { leagues, loading, requestLeagues, errorMessage, season } = props;

	useEffect(() => {
		requestLeagues()
		// console.log('season ', season)
	}, [])

	if (errorMessage) {
		return <h2 style={{ marginTop: "50px" }}>{errorMessage}</h2>
	}

	if (loading) {
		return <Loading />
	}

	if (!leagues.length) {
		return (
			<Warning />
		)
	}
	return <div className="content">
		<h1><SportsSoccerIcon /> Список Лиг</h1>
		{leagues.map((league: any, index: number) => {
			return (
				<ItemLeagues key={league.id} id={league.id} index={index + 1} name={league.name} />
			)
		})
		}
	</div>
};

const mapStateToProps = (state: any) => ({
	leagues: state.leagues.leagues,
	errorMessage: state.leagues.errorMessage,
	loading: state.app.loading,
	season: state.leagues.season
})
const mapDispatchToProps = (dispatch: any) => {
	return {
		requestLeagues: () => dispatch(requestLeagues())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesList);