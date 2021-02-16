import React from "react";
import Header from "./components/Header";
import Container from '@material-ui/core/Container';


const Layout = (props: any) => {
	return (
		<>
			<Header />
			<Container>
				{props.children}
			</Container>
		</>
	);
}


export default Layout;