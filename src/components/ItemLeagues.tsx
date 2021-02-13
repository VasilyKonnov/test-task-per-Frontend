import React from "react"
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

interface ItemLeagues {
	index: number,
	id: number | string,
	name: string
}

const ItemLeagues = (props: ItemLeagues) => {
	return (
		<Link to={`/leagues/${props.id}`}>
			<Paper
				className={'ItemLeagues'}
				elevation={0}
			>
				<span style={{ fontSize: "10px" }}>id Лиги - {props.id}</span>
				<br />
				<span>{props.index}. </span>
				<span>{props.name} </span>
			</Paper>
		</Link>
	)
}

export default ItemLeagues;