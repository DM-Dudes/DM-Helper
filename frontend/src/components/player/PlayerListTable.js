import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import PlayerListMap from './PlayerListMap.js'
import { stat } from 'fs';
import { Redirect } from 'react-router-dom'
import PlayerPage from '../../pages/Players_details.js'

 const PlayerListTable = (_props) => {

  const [players, setPlayers] = useState(0)
  const [redirect, setRedirect] = useState(false)
  const [PlayerLink, setPlayerLink] = useState(null)
  const handleClick = (Player_id) => {
    setRedirect(true)
    setPlayerLink(Player_id)
  }
  const playerList = async () => {
    let playerId = 2
    let stateArray = []
    const playerSet = await DmAPI.fetchPlayers(playerId)
      for(let player of playerSet){
        if(player.dmtable === playerId){
          stateArray.push(<div>{player.name} <button onClick={() => handleClick(player.player_id)}>click me to go!</button></div>)
        }
      }
      if (players === 0){
        setPlayers(stateArray)
      }
    }
  useEffect(() => {
    playerList()
  })
  if(!redirect){
    return (
      <div>
        {players}
      </div>
    );
  }else{
    return(
      <PlayerPage id={PlayerLink}/>
    )
  }
  }
 export default PlayerListTable