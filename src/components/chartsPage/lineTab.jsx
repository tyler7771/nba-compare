import React, { useEffect, useState } from "react";
import {
  clearLastTenStats,
  getLastTenGamesStats,
} from "../../actions/statsActions";
import { mapStatsLabel, statsSelectDropdownArr } from "./pageHelpers";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import LineCard from "./charts/lineCard";
import { connect } from "react-redux";

let LineTab = ({
  clearLastTenStats,
  players,
  getLastTenGamesStats,
  lastTen,
}) => {
  const [stat, setStat] = useState("pts");

  useEffect(() => {
    clearLastTenStats();
    players.forEach((player) => {
      getLastTenGamesStats(player);
    });
  }, [JSON.stringify(players)]);

  return (
    <>
      <div id="radar-btn-container">
        <DropdownButton id="dropdown-basic-button" title={mapStatsLabel(stat)}>
          {statsSelectDropdownArr.map((statEl, i) => (
            <Dropdown.Item
              key={`stat-dropdown-${i}`}
              onClick={() => setStat(statEl)}
            >
              {mapStatsLabel(statEl)}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <span className="season-astrisk">
          *All stats are from the 2020-2021 season
        </span>
      </div>
      {lastTen.length === players.length && (
        <LineCard players={players} stats={lastTen} stat={stat} />
      )}
    </>
  );
};

const mapStatetoProps = (state) => ({
  players: state.players.data,
  lastTen: state.stats.lastTen,
});

const mapDispatchtoProps = {
  getLastTenGamesStats: getLastTenGamesStats,
  clearLastTenStats: clearLastTenStats,
};

LineTab = connect(mapStatetoProps, mapDispatchtoProps)(LineTab);
export default LineTab;
