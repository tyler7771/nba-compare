import React from "react";
import { connect } from "react-redux";
import { getPlayer } from "../../actions/playerActions";
import { getPlayers } from "../../actions/searchActions";

let SearchBar = ({ getPlayer, getPlayers, players }) => (
  <div id="search-bar">
    <input placeholder="Search for Player (ex: Lebron james)" onChange={(e) => getPlayers(e.target.value)} />
    {players && (
      <ul>
        {players.map((el, i) => (
          <li
            onClick={() => getPlayer(el.id)}
            key={`player-${i}`}
          >{`${el.first_name} ${el.last_name} - ${el.team.abbreviation}`}</li>
        ))}
      </ul>
    )}
  </div>
);

const mapDispatchToProps = {
  getPlayer: getPlayer,
  getPlayers: getPlayers,
};

const mapStatetoProps = (state) => ({
  players: state.search.players,
});

SearchBar = connect(mapStatetoProps, mapDispatchToProps)(SearchBar);
export default SearchBar;
