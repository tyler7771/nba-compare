import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import RadarCard from "./charts/radarCard";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { getSeasonAverages } from "../../actions/statsActions";

// import { removePlayer } from "../../actions/playerActions";

let RadarTab = ({ players, getSeasonAverages, seasonAverages }) => {
  const [isOffenseStats, setIsOffenseStats] = useState(true);
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

  const getStats = (id) => {
    let stats = null;
    seasonAverages.forEach((statsObj) => {
      if (statsObj.player_id === id) {
        stats = statsObj;
      }
    });

    return stats;
  };

  return (
    <>
      <div id="radar-btn-container">
        <ButtonGroup size="lg">
          <Button
            onClick={() => setIsOffenseStats(true)}
            variant={`${isOffenseStats ? "primary" : "outline-primary"}`}
          >
            Offensive Stats
          </Button>
          <Button
            onClick={() => setIsOffenseStats(false)}
            variant={`${!isOffenseStats ? "primary" : "outline-primary"}`}
          >
            Defensive Stats
          </Button>
        </ButtonGroup>
      </div>
      <Row>
        {seasonAverages &&
          players.map((player, i) => (
            <RadarCard
              player={player}
              key={`radar-card-${i}`}
              stats={getStats(player.id)}
              isOffenseStats={isOffenseStats}
            />
          ))}
      </Row>
    </>
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
