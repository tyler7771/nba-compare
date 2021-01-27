import React from "react";
import SearchBar from "../search/searchBar";
import { connect } from "react-redux";

let Header = ({ players }) => (
  <div id="header">
    <h1>NBA COMPARE</h1>
    <SearchBar displayCount={10} />
  </div>
);

const mapStatetoProps = (state) => ({
  players: state.players.data,
});

Header = connect(mapStatetoProps, null)(Header);
export default Header;
