import React, { ChangeEvent, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { getYearSeason, nullifyDateFromTo } from "../redux/actions"
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			marginBottom: theme.spacing(3),
			width: "50%",
			color: "#34A5DD"
		}
	}),
);

const getMenuItemYers = (beforeThisYear: number) => {
	let i: number;
	const arrayYers: any = [];
	for (i = 2021; i >= beforeThisYear; i--) {
		arrayYers.push(i)
	}
	return arrayYers;
}

function CustomSelect(props: any) {

	const { getYearSeason, season, startValue, nullifyDateFromTo } = props;
	const classes = useStyles();

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		getYearSeason(event.target.value as number)
	};
	return (
		<FormControl className={classes.formControl} >
			<InputLabel className="custom-inputLabel" id="controlled-open-select-label">Выберите год</InputLabel>
			<Select
				labelId="controlled-open-select-label"
				id="controlled-open-select"
				value={startValue.length ? startValue : season}
				onChange={handleChange}
			>
				<MenuItem value={""} >
					<em>Выберите год</em>
				</MenuItem>
				{getMenuItemYers(2016).map((year: number, index: any) => (
					<MenuItem className="select-data" key={index} value={year}>
						<Link className="select-data--link" to={`?season=${year}`}>
							{year}
						</Link>
					</MenuItem>
				))}
			</Select>
		</FormControl >
	);
}


const mapStateToProps = (state: any) => ({
	season: state.leagues.season
})
const mapDispatchToProps = (dispatch: any) => {
	return {
		getYearSeason: (season: any) => dispatch(getYearSeason(season)),
		nullifyDateFromTo: () => dispatch(nullifyDateFromTo()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSelect);