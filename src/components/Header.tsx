import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { Container } from '@material-ui/core';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import PeopleIcon from '@material-ui/icons/People';



const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			backgroundColor: "#34A5DD"
		},
		toolbar: {
			padding: "0"
		},
		logo: {
			flexGrow: 1,
			textDecoration: "none",
			fontWeight: 700,
			color: "#ffffff",
			textTransform: "uppercase",
			display: "inline-flex"
		},
		wraper: {
			padding: "10px",
			display: 'flex',
			flexDirection: "column",
			width: "170px"
		},
		button: {
			width: "100%",
			textTransform: "initial",
			justifyContent: "left"
		},
		link: {
			textDecoration: "none"
		}
	}),
);

export default function Header(props: any) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	return (
		<AppBar position="static" className={classes.root}>
			<Container>
				<Toolbar className={classes.toolbar} >
					<NavLink to="/" className={classes.logo} title="Перейки на главную">SoccerStat <EqualizerRoundedIcon /></NavLink>
					<div className={"desctop-menu"}>
						<NavLink exact activeClassName={'active'} to="/"><SportsSoccerIcon /> <span>Лиги</span></NavLink>
						<NavLink exact activeClassName={'active'} to="/comands-list"><PeopleIcon /> <span>Команды</span></NavLink>
					</div>
					<div className={"mobile-menu"}>
						<IconButton
							onClick={handleClick}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Popover
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center"
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "center"
							}}
						>
							<div className={classes.wraper} >
								<NavLink exact activeClassName={'active'} className={classes.link} to="/">
									<Button
										className={classes.button}
										onClick={handleClose}
										startIcon={<SportsSoccerIcon />}
									><span>Лиги</span></Button>
								</NavLink>
								<NavLink exact activeClassName={'active'} className={classes.link} to="/comands-list">
									<Button
										className={classes.button}
										onClick={handleClose}
										startIcon={<PeopleIcon />}><span>Команды</span></Button>
								</NavLink>
							</div>
						</Popover>
					</div>
				</Toolbar>
			</Container>
		</AppBar >
	);
}
