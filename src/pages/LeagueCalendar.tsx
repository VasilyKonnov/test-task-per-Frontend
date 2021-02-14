import React from "react"
import Matches from "./Matches"
import { URL_LEAGUES } from "../constants"

const LeagueCalendar = (props: any) => {
	return <Matches url={URL_LEAGUES} />
}

export default LeagueCalendar;