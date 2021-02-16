import React from "react"
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import HighlightText from './HighlightText';

interface ItemLeagues {
	index: number,
	id: number | string,
	name: string,
	searchValue: any
}

const ItemLeagues = (props: ItemLeagues) => {
	const { id, searchValue, index, name } = props
	return (
		<Link to={`/leagues/${id}`}>
			<Paper
				className={'ItemLeagues'}
				elevation={0}
			>
				<span style={{ fontSize: "10px" }}><HighlightText highlightText={searchValue}>{'id Лиги - ' + id} </HighlightText></span>
				<br />
				<span><HighlightText highlightText={searchValue}>{index + '.'}</HighlightText></span>
				<span><HighlightText highlightText={searchValue}>{" " + name}</HighlightText></span>
			</Paper>
		</Link>
	)
}

export default ItemLeagues;