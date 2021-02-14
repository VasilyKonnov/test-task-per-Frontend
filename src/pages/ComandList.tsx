import React, { useEffect } from "react";
import PeopleIcon from '@material-ui/icons/People';
import { connect } from "react-redux";
import Warning from "../components/Warning";
import Loading from "../components/Loading";
import { requestTeams } from "../redux/actions";
import TableTeams from "../components/TableTeams";


const ComandList = (props: any) => {

	const { teams, loading, requestTeams, errorMessage } = props;

	useEffect(() => {
		requestTeams()
	}, [])


	if (errorMessage) {
		return <h2 style={{ marginTop: "50px" }}>{errorMessage}</h2>
	}

	if (loading) {
		return <Loading />
	}

	if (!teams.length) {
		return (
			<Warning />
		)
	}
	return (
		<>
			<h1><PeopleIcon /> Список команд</h1>
			<TableTeams dataTable={teams} />
		</>
	)
};

const mapStateToProps = (state: any) => ({
	teams: state.leagues.teams,
	errorMessage: state.leagues.errorMessage,
	loading: state.app.loading,
	season: state.leagues.season
})
const mapDispatchToProps = (dispatch: any) => {
	return {
		requestTeams: () => dispatch(requestTeams())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComandList);