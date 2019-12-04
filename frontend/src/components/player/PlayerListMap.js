import React, { Component } from 'react';
import PlayerView from './Playerview.js'


function PlayerListMap (props) {
    const mapObject = () => {
      return props.map((props, id) => {
        return <PlayerView
          id = {id}
          name={props.name}
          details={props.details}
          table_id={props.dmtable}
        />
      })
    }

    if (props && props.length) {
      return (
        <div>
          {
            mapObject()
          }
        </div>
      )
    } else {
      return <div>No Players</div>
    }
  }


export default PlayerListMap;
