import Header from "./header";
import RadarTab from "./radarTab";
import React from "react";
import { connect } from "react-redux";

let ChartsPage = ({ players }) => (
  <>
    <Header />
    <RadarTab />
  </>
);

const mapStatetoProps = (state) => ({
  players: state.players.data,
});

ChartsPage = connect(mapStatetoProps, null)(ChartsPage);
export default ChartsPage;
