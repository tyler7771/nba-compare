import React from 'react';
import { connect } from 'react-redux';
import { getPlayers } from '../../actions/searchActions';

let SearchBar=({getPlayers, players})=>(
  <>
   <input placeholder='Search for Player' onChange={e => getPlayers(e.target.value)}/>
   {players && 
   <ul>
    {players.map((el, i) => <li>{`${el.first_name} ${el.last_name} - ${el.team.abbreviation}`}</li>)}
   </ul>
   }
  </>
);

const mapDispatchToProps = {
  getPlayers: getPlayers,
};

const mapStatetoProps = (state, ownProps) => ({
  players: state.search.players
})

SearchBar = connect(mapStatetoProps,mapDispatchToProps)(SearchBar);
export default SearchBar;