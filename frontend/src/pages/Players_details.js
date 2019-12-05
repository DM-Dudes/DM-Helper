import React, { useEffect, useState } from 'react';
import Api from '../Api/DmApi.js'

const PlayerPage = (props) => {
  const [playerinfo, setPlayerInfo] = useState('');
  const player = async () => {
    const profileinfo = await Api.fetchPlayerByID(props.id)
    if (playerinfo === '') {
      setPlayerInfo(profileinfo)
    }
  }
  
  useEffect(() => {
    player()
  })
  return (
    <div>
      <h1>Player ID: {playerinfo.player_id}</h1>
      <h1>name: {playerinfo.name}</h1>
      <h1>Table ID: {playerinfo.dmtable}</h1>
      <h1>Player Details: {playerinfo.details}</h1>
    </div>
  );
}

export default PlayerPage;
