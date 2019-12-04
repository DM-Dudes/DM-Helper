import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import PlayerListMap from './PlayerListMap.js'
import { stat } from 'fs';
 
 const PlayerListTable = (_props) => {

  const [players, setPlayers] = useState(0)
 
  const playerList = async () => {
    let playerId = 2
    let stateArray = []
    const playerSet = await DmAPI.fetchPlayers(playerId)
      for(let player of playerSet){
        if(player.dmtable === playerId){
          stateArray.push(player)
        }
      }
      if (players === 0){
        setPlayers(stateArray)
      }
    }
  useEffect(() => {
    playerList()
  })
  if (!players) {
    return (
      <div>Jordan</div>
    )
  } else {
     return (
       <div>
         <PlayerListMap player={players} />
       </div>
     )
   }
  }
 export default PlayerListTable