import React, { useEffect, useState } from 'react';
import Api from '../Api/DmApi.js'

const Player_details = (props) => {
  const [playerinfo, setPlayerInfo] = useState('');
  const [player, setPlayer] = useState(null)

  const playerID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  console.log(playerID)
   useEffect(() => {
    Api.fetchPlayersByID(playerID)
      .then((apiResponseJSON) => {
        setPlayer(apiResponseJSON)
        console.log(playerID)
      }
      )
  }, [])

  return (
    <div>
      <h1>Player ID: {player.player_id}</h1>
      <h1>name: {player.name}</h1>
      <h1>Table ID: {player.dmtable}</h1>
      <h1>Player Details: {player.details}</h1>
    </div>
  );
}

export default Player_details;
