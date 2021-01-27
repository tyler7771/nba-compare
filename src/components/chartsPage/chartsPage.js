import React from "react";
import SearchBar from "../search/searchBar";
import { connect } from "react-redux";

let ChartsPage = ({ players }) => (
  <>
    <div id="header">
      <SearchBar />
    </div>
    {players.map((player, i) => (
      <span key={i}>{player.first_name}</span>
    ))}
  </>
);

const mapStatetoProps = (state) => ({
  players: state.players.data,
});

ChartsPage = connect(mapStatetoProps, null)(ChartsPage);
export default ChartsPage;
