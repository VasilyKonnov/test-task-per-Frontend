import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { matchesInterface } from '../pages/Matches';


const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: "rgba(255,27,26, .6)",
			color: theme.palette.common.black,
		},
		body: {
			fontSize: 14,
		},
	}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: "rgba(245,245,245, .2)",
			},
		},
	}),
)(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

function TableLeagueMatches(props: any) {

	const { dataTable } = props;
	const classes = useStyles()
	return (
		<TableContainer component={Paper} className="table-matches">
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Away team</StyledTableCell>
						<StyledTableCell>Home team</StyledTableCell>
						<StyledTableCell align="right">Winner</StyledTableCell>
						<StyledTableCell align="right">Start date</StyledTableCell>
						<StyledTableCell align="right">End date</StyledTableCell>
						<StyledTableCell align="right">Status</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dataTable ?
						dataTable.map((item: matchesInterface) => (
							<StyledTableRow key={item.id}>
								<StyledTableCell component="th" scope="row">{item.awayTeam}</StyledTableCell>
								<StyledTableCell component="th" scope="row">{item.homeTeam}</StyledTableCell>
								<StyledTableCell align="right">{item.winner}</StyledTableCell>
								<StyledTableCell align="right">{item.startDate}</StyledTableCell>
								<StyledTableCell align="right">{item.endDate}</StyledTableCell>
								<StyledTableCell align="right">{item.status}</StyledTableCell>
							</StyledTableRow>
						))
						:
						<h1>Загрузка...</h1>
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
export default TableLeagueMatches;