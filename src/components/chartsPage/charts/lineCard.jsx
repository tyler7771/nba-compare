import Col from "react-bootstrap/Col";
import { Line } from "react-chartjs-2";
import React from "react";
import color from "rcolor";
import { getStats } from "../pageHelpers";
import { mapStatsLabel } from "../pageHelpers";

let LineCard = ({ players, stats, stat }) => {
  const data = () => {
    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const datasets = players.map((player) => {
      const label = `${player.first_name} ${player.last_name}`;
      const data = getStats(player.id, stats).games.map((game) => game[stat]);
      const lineColor = color();

      return {
        label,
        data,
        fill: false,
        backgroundColor: lineColor,
        borderColor: lineColor,
      };
    });

    return {
      labels,
      datasets,
    };
  };

  const options = {
    tooltips: {
      callbacks: {
        title: () => {
          return mapStatsLabel(stat);
        },
        label: (tooltipItem, data) => {
          return `${data.datasets[tooltipItem.datasetIndex].label}: ${
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
          }${stat.slice(stat.length - 3) === "pct" ? "%" : ""}`;
        },
      },
    },
  };

  return (
    <Col xs={12}>
      <Line data={data()} options={options} />
    </Col>
  );
};

export default LineCard;
