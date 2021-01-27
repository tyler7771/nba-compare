import Header from "./header";
import React from "react";
import { connect } from "react-redux";

let ChartsPage = ({ players }) => (
  <>
    <Header />
    {players.map((player, i) => (
      <span key={i}>{player.first_name}</span>
    ))}
  </>
);

const mapStatetoProps = (state) => ({
  players: state.players.data,
});

ChartsPage = connect(mapStatetoProps, null)(ChartsPage);
export default ChartsPage;
