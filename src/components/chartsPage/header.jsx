import React from "react";
import SearchBar from "../search/searchBar";
import SearchedPlayerPill from "./searchedPlayerPill";
import { connect } from "react-redux";

let Header = ({ players }) => (
  <div id="header">
    <h1>NBA COMPARE</h1>
    <div id="search-container">
      {players.map((player, i) => (
        <SearchedPlayerPill key={`player-pill-${i}`} player={player} />
      ))}
      <SearchBar displayCount={10} />
    </div>
  </div>
);

const mapStatetoProps = (state) => ({
  players: state.players.data,
});

Header = connect(mapStatetoProps, null)(Header);
export default Header;
