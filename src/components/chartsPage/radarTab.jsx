import React, { useEffect, useState } from "react";
import { generateSearchString, getStats } from "./pageHelpers";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import RadarCard from "./charts/radarCard";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { getSeasonAverages } from "../../actions/statsActions";

let RadarTab = ({ players, getSeasonAverages, seasonAverages }) => {
  const [isOffenseStats, setIsOffenseStats] = useState(true);

  useEffect(() => {
    const searchString = generateSearchString(players);
    getSeasonAverages(searchString);
  }, [JSON.stringify(players)]);

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
        <span className="season-astrisk">
          *All stats are from the 2020-2021 season
        </span>
      </div>
      <Row>
        {seasonAverages &&
          players.map((player, i) => (
            <RadarCard
              player={player}
              key={`radar-card-${i}`}
              stats={getStats(player.id, seasonAverages)}
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
