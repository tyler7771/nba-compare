import { getMainColor, getSecondaryColor } from "nba-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { removePlayer } from "../../actions/playerActions";
import { removePlayerStats } from "../../actions/statsActions";

let SearchedPlayerPill = ({ player, removePlayer }) => {
  const primary = getMainColor(player.team.abbreviation).hex;
  const secondary = getSecondaryColor(player.team.abbreviation).hex;

  return (
    <div
      className="player-pill"
      style={{
        backgroundColor: primary,
        color: secondary,
      }}
      onClick={() => {
        removePlayer(player.id);
        removePlayerStats(player.id);
      }}
    >
      {`${player.first_name} ${player.last_name}`}
      <span
        style={{
          color: secondary,
        }}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
    </div>
  );
};

const mapStatetoProps = (_, ownProps) => ({
  player: ownProps.player,
});

const mapDispatchToProps = {
  removePlayer: removePlayer,
  removePlayerStats: removePlayerStats,
};

SearchedPlayerPill = connect(
  mapStatetoProps,
  mapDispatchToProps
)(SearchedPlayerPill);
export default SearchedPlayerPill;
