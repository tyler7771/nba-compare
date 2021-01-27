import ChartsPage from "./chartsPage/chartsPage";
import React from "react";
import Search from "./search/searchBar";
import { connect } from "react-redux";

let App = ({ players }) => (
  <div className="App">
    {players.length === 0 && (
      <div id="search-only-container">
        <h1>NBA COMPARE</h1>
        <Search displayCount={25} />
      </div>
    )}
    {players.length !== 0 && <ChartsPage />}
  </div>
);

const mapStatetoProps = (state) => ({
  players: state.players.data,
});

App = connect(mapStatetoProps, null)(App);
export default App;
