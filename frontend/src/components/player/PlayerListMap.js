import React from 'react';
import PlayerView from "./Playerview.js"

function PlayerListMap (props) {
  const mapObject = () => {
    let players = props.player
    Map.players = () => {
    return <PlayerView
      name={props.name}
      details={props.details}
      table_id={props.dmtable}
    />
    }
  }

  if (props) {
    return (
      <div>
        {() => mapObject}
      
      </div>
    )
    } else {
      return <div>No Players</div>
    }
  }


export default PlayerListMap;
