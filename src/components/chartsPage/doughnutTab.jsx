import React, { useEffect, useState } from "react";
import { generateSearchString, getStats } from "./pageHelpers";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PieCard from "./charts/doughnutCard";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { getSeasonAverages } from "../../actions/statsActions";

let RadarTab = ({ players, getSeasonAverages, seasonAverages }) => {
  const [shootingStats, setShootingStats] = useState("ft");

  useEffect(() => {
    const searchString = generateSearchString(players);
    getSeasonAverages(searchString);
  }, [JSON.stringify(players)]);

  return (
    <>
      <div id="radar-btn-container">
        <ButtonGroup size="lg">
          <Button
            onClick={() => setShootingStats("ft")}
            variant={`${
              shootingStats === "ft" ? "primary" : "outline-primary"
            }`}
          >
            Free Throw %
          </Button>
          <Button
            onClick={() => setShootingStats("fg")}
            variant={`${
              shootingStats === "fg" ? "primary" : "outline-primary"
            }`}
          >
            Field Goal %
          </Button>
          <Button
            onClick={() => setShootingStats("fg3")}
            variant={`${
              shootingStats === "fg3" ? "primary" : "outline-primary"
            }`}
          >
            3 Point %
          </Button>
        </ButtonGroup>
        <span className="season-astrisk">
          *All stats are from the 2020-2021 season
        </span>
      </div>
      <Row>
        {seasonAverages &&
          players.map((player, i) => (
            <PieCard
              player={player}
              key={`pie-card-${i}`}
              stats={getStats(player.id, seasonAverages)}
              shootingStats={shootingStats}
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
