import React, { useEffect, useState } from "react";
import PeopleIcon from '@material-ui/icons/People';
import { connect } from "react-redux";
import Warning from "../components/Warning";
import Loading from "../components/Loading";
import { requestTeams } from "../redux/actions";
import TableTeams from "../components/TableTeams";
import Search from "../components/Search";
import NoResultSearch from "../components/NoResultSearch";


const ComandList = (props: any) => {
	const { teams, loading, requestTeams, errorMessage } = props;

	// search state
	const [searchValue, setSearchValue] = useState('');
	const [allResult, setAllResult] = useState([]);
	const [displayedResult, setDisplayedResult] = useState([]);
	// end search state
	const searchText = () => {
		const searching = (displayedResult: any) => {
			let nameIndexOf = displayedResult.name.toLowerCase().indexOf(searchValue.toLowerCase());
			let clubColors = displayedResult.clubColors.toLowerCase().indexOf(searchValue.toLowerCase());

			if (nameIndexOf !== -1 || clubColors !== -1) {
				return true;
			} else {
				return false;
			}
		}

		const foundText = allResult.filter(searching)
		setDisplayedResult(foundText)
	}
	const handleSearchValue = (event: any) => {
		setSearchValue(event.target.value)
		if (searchValue.length > 1) {
			searchText()
		} else {
			setDisplayedResult(allResult)
		}
	}

	useEffect(() => {
		requestTeams();
	}, [])

	useEffect(() => {
		setDisplayedResult(teams);
		setAllResult(teams);
	}, [teams])

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
			<Search searchText={searchText} handleSearchValue={handleSearchValue} />
			{
				!displayedResult.length
					?
					<NoResultSearch />
					:
					<TableTeams searchValue={searchValue} dataTable={displayedResult} />
			}
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