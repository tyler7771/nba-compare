import { Radar } from "react-chartjs-2";
import React from "react";
import { connect } from "react-redux";
import { getMainColor } from "nba-color";

// import { removePlayer } from "../../actions/playerActions";

let RadarCard = ({ player, stats }) => {
  const data = () => {
    const color = getMainColor(player.team.abbreviation).rgb;
    const backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.1)`;
    const borderColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
    const { fg_pct, fg3_pct, ft_pct } = stats;

    return {
      labels: ["Field Goal %", "3 Point %", "Free Throw %"],
      datasets: [
        {
          data: [fg_pct * 100, fg3_pct * 100, ft_pct * 100],
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

  return (
    <div>
      <h2>{`${player.first_name} ${player.last_name}`}</h2>
      {stats ? (
        <Radar data={data()} options={options} />
      ) : (
        <h2>Hasn't played this season</h2>
      )}
    </div>
  );
};

export default RadarCard;
