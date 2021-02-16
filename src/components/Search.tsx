import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			width: '500px',
			maxWidth: '100%',
			marginBottom: '30px'
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		divider: {
			height: 28,
			margin: 4,
		},
	}),
);


export default function Search(props: any) {


	const { handleSearchValue, searchText } = props;

	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root} onSubmit={(event) => event.preventDefault()}>
			<InputBase
				className={classes.input}
				placeholder="Поиск по тексту"
				inputProps={{ 'aria-label': 'Поиск по тексту' }}
				onChange={handleSearchValue}
			/>
			<IconButton onClick={searchText} type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}