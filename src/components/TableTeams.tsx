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
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: "rgba(52,165,221, .6)",
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

	const history = useHistory()
	const { dataTable } = props;
	const classes = useStyles()
	return (
		<TableContainer component={Paper} style={{ marginBottom: "50px" }}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Name</StyledTableCell>
						<StyledTableCell>Год основания</StyledTableCell>
						<StyledTableCell>id</StyledTableCell>
						<StyledTableCell>Club/Colors</StyledTableCell>
						<StyledTableCell>Logo team</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{dataTable ?
						dataTable.map((item: matchesInterface) => (
							<StyledTableRow className="link-team" key={item.id} onClick={() => history.push(`/teams/${item.id}`)}>
								<StyledTableCell component="th" scope="row">{item.name}</StyledTableCell>
								<StyledTableCell component="th" scope="row">{item.founded}</StyledTableCell>
								<StyledTableCell component="th" scope="row">{item.id}</StyledTableCell>
								<StyledTableCell>{item.clubColors}</StyledTableCell>
								<StyledTableCell><img src={item.crestUrl} style={{ maxWidth: '30px' }} /></StyledTableCell>
							</StyledTableRow>
						))
						:
						<h1>Загрузка...</h1>
					}
				</TableBody>
			</Table>
		</TableContainer >
	);
}
export default TableLeagueMatches;