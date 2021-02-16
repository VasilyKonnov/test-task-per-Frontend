import React, { useEffect, useState } from "react";
import { requestLeagues } from "../redux/actions"
import { connect } from "react-redux"
import ItemLeagues from "../components/ItemLeagues";
import Warning from "../components/Warning";
import Loading from "../components/Loading";
import SportsSoccerRoundedIcon from '@material-ui/icons/SportsSoccerRounded';
import Search from "../components/Search"
import NoResultSearch from "../components/NoResultSearch";



const LeaguesList = (props: any) => {
	const { leagues, loading, requestLeagues, errorMessage } = props;

	// search state
	const [searchValue, setSearchValue] = useState('');
	const [allResult, setAllResult] = useState([]);
	const [displayedResult, setDisplayedResult] = useState([]);
	// end search state
	const searchText = () => {
		const searching = (displayedResult: any) => {
			let idIndexOf = displayedResult.id.toString().toLowerCase().indexOf(searchValue.toLowerCase());
			let nameIndexOf = displayedResult.name.toLowerCase().indexOf(searchValue.toLowerCase());
			if (idIndexOf !== -1 || nameIndexOf !== -1) {
				return true;
			}
			return false;
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
		requestLeagues()
	}, [])

	useEffect(() => {
		setDisplayedResult(leagues);
		setAllResult(leagues);
	}, [leagues])


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
		<h1><SportsSoccerRoundedIcon /> Список Лиг</h1>
		<Search handleSearchValue={handleSearchValue} searchText={searchText} />
		{displayedResult.length
			?
			displayedResult.map((league: any, index: number) => {
				return (
					<ItemLeagues
						searchValue={searchValue}
						key={league.id}
						id={league.id}
						index={index + 1}
						name={league.name}
					/>
				)
			})
			:
			<NoResultSearch />
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