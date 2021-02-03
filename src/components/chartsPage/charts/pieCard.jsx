import * as NBAIcons from "react-nba-logos";

import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radar } from "react-chartjs-2";
import React from "react";
import { connect } from "react-redux";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { getMainColor } from "nba-color";
import { removePlayer } from "../../../actions/playerActions";
import { removePlayerStats } from "../../../actions/statsActions";

let PieCard = ({ player, stats, isOffenseStats, removePlayer }) => {
  const Icon = NBAIcons[player.team.abbreviation];

  const data = () => {
    const color = getMainColor(player.team.abbreviation).rgb;
    const backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`;
    const borderColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
    const { ast, blk, fg_pct, fg3_pct, ft_pct, reb, stl, turnover } = stats;
    const labels = isOffenseStats
      ? ["Field Goal %", "3 Point %", "Free Throw %"]
      : ["Assists", "Blocks", "Rebounds", "Steals", "Turnovers"];
    const data = isOffenseStats
      ? [fg_pct * 100, fg3_pct * 100, ft_pct * 100]
      : [ast, blk, reb, stl, turnover];

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  const mapPosition = (position) => {
    switch (position[0]) {
      case "C":
        return "Center";
      case "F":
        return "Forward";
      case "G":
        return "Guard";
      default:
        return position;
    }
  };

  return (
    <Col xs={12} md={6}>
      <div className="div" className={`radar-card ${!stats ? "no-stats" : ""}`}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={() => {
            removePlayer(player.id);
            removePlayerStats(player.id);
          }}
        />
        <div className="player-info">
          <div className="info-name-logo-container">
            <h2>{`${player.first_name} ${player.last_name}`}</h2>
            <Icon />
          </div>
          <span>
            {player.team.city} {player.team.name}
          </span>
          {stats && (
            <>
              <span>{mapPosition(player.position)}</span>
              <span>
                {player.height_feet}' {player.height_inches}"
              </span>
            </>
          )}
        </div>
        {stats ? (
          <Radar data={data()} options={options} legend={{ display: false }} />
        ) : (
          <div className="didnt-play">
            {`${player.first_name} ${player.last_name}`} hasn't played this
            season.
          </div>
        )}
      </div>
    </Col>
  );
};

const mapStatetoProps = (_, ownProps) => ({
  player: ownProps.player,
  stats: ownProps.stats,
  isOffenseStats: ownProps.isOffenseStats,
});

const mapDispatchtoProps = {
  removePlayer: removePlayer,
  removePlayerStats: removePlayerStats,
};

PieCard = connect(mapStatetoProps, mapDispatchtoProps)(PieCard);
export default PieCard;
