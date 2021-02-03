import * as NBAIcons from "react-nba-logos";

import { getMainColor, getSecondaryColor } from "nba-color";

import Col from "react-bootstrap/Col";
import { Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { removePlayer } from "../../../actions/playerActions";
import { removePlayerStats } from "../../../actions/statsActions";

let DoughNutCard = ({ player, stats, shootingStats, removePlayer }) => {
  const Icon = NBAIcons[player.team.abbreviation];

  const data = () => {
    const color1 = getMainColor(player.team.abbreviation).hex;
    const color2 = getSecondaryColor(player.team.abbreviation).hex;
    const backgroundColor = [color1, color2];

    const labels = ["Made", "Miss"];

    const attempt = stats[`${shootingStats}a`];
    const made = stats[`${shootingStats}m`];
    const miss = attempt - made;
    const data = [made, miss];

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
        },
      ],
    };
  };

  const options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const percent =
            tooltipItem.index === 0
              ? stats[`${shootingStats}_pct`] * 100
              : 100 - stats[`${shootingStats}_pct`] * 100;
          return `${data.labels[tooltipItem.index]}: ${
            data.datasets[0].data[tooltipItem.index]
          } of ${stats[`${shootingStats}a`]} (${Math.round(percent)}%)`;
        },
      },
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
      <div
        className="div"
        className={`doughnut-card ${!stats ? "no-stats" : ""}`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={() => {
            removePlayer(player.id);
            removePlayerStats(player.id);
          }}
        />
        <div className="player-info">
          <h2>{`${player.first_name} ${player.last_name}`}</h2>
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
          <>
            <div className="icon">
              <Icon />
            </div>
            <Doughnut
              data={data()}
              options={options}
              legend={{ display: false }}
            />
          </>
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

DoughNutCard = connect(mapStatetoProps, mapDispatchtoProps)(DoughNutCard);
export default DoughNutCard;
