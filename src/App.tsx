import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Layout';
import LeagueCalendar from './pages/LeagueCalendar';
import ComandCalendar from './pages/ComandCalendar';
import LeaguesList from './pages/LeaguesList';
import ComandList from './pages/ComandList';

function App(props: any) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Layout>
        <Switch>
          <Route path="/leagues" component={LeagueCalendar} />
          <Route path="/leagues/:id" component={LeagueCalendar} />
          <Route path="/leagues/:id/matches?season=:season" component={LeagueCalendar} />
          <Route path="/comands-list" component={ComandList} />
          <Route path="/comands" component={ComandCalendar} />
          <Route path="/teams/:id" component={ComandCalendar} />
          <Route path="/" component={LeaguesList} />
        </Switch>
      </Layout>
    </BrowserRouter >
  );
}

export default App;