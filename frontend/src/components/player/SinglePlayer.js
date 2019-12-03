import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
 
 export const SinglePlayer = (_props) => {

  const [players, setPlayers] = useState()
  React.useEffect (() => {
    let playerId = 1
    let stateArray = []
    DmAPI.fetchPlayers(playerId)
    .then((apiResponseJSON) => {
      console.log(apiResponseJSON)
      for(let player of apiResponseJSON){
        if(player.dmtable === playerId){
        stateArray.push(player.name)
        console.log(player)
      }
      setPlayers(stateArray)
      console.log(stateArray)
      }
    })
  }, [])

     return (
       <div>
         {players}
       </div>
     );
   }
 
 export default SinglePlayer;
