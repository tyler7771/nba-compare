import React, { useEffect } from "react";

import RadarCard from "./charts/radarCard";
import { connect } from "react-redux";
import { getSeasonAverages } from "../../actions/statsActions";

// import { removePlayer } from "../../actions/playerActions";

let RadarTab = ({ players, getSeasonAverages, seasonAverages }) => {
  useEffect(() => {
    const searchString = generateSearchString();
    getSeasonAverages(searchString);
  }, [JSON.stringify(players)]);

  const generateSearchString = () => {
    let str = "";

    players.forEach((player) => {
      str += `&player_ids[]=${player.id}`;
    });

    return str;
  };

  return (
    <div>
      {seasonAverages &&
        players.map((player, i) => (
          <RadarCard
            player={player}
            key={`radar-card-${i}`}
            stats={seasonAverages[i]}
          />
        ))}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  players: state.players.data,
  seasonAverages: state.stats.seasonAverages,
});

const mapDispatchtoProps = {
  getSeasonAverages: getSeasonAverages,
};

RadarTab = connect(mapStatetoProps, mapDispatchtoProps)(RadarTab);
export default RadarTab;
