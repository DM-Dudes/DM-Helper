import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import PlayerListMap from './PlayerListMap.js'
import { stat } from 'fs';
import { Redirect } from 'react-router-dom'
import Players_details from '../../pages/Players_details.js'

 const PlayerListTable = (props) => {

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
        if(player.dmtable === props.tableid){
          stateArray.push(<div key={player.player_id}>{player.name} <button onClick={() => handleClick(player.player_id)}>click me to go!</button></div>)
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
      <Redirect to={`/Players_details/${PlayerLink}`}/>
    )
  }
  }
 export default PlayerListTable