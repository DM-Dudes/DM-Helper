import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import "./PlayerList.css";
import DmAPI from '../../Api/DmApi.js';

   
 const PlayerListTable = (props) => {

  const [players, setPlayers] = useState(0)
  const [redirect, setRedirect] = useState(false)
  const [PlayerLink, setPlayerLink] = useState(null)

  const handleClick = (Player_id) => {
    setRedirect(true)
    setPlayerLink(Player_id)
  }
  const playerList = async () => {
    let stateArray = []
    const playerSet = await DmAPI.fetchPlayers()
    for (let player of playerSet) {
      if (player.dmtable === props.tableid) {
        stateArray.push(
          <div key={player.player_id}>
            <div className="playerTeaserBox" onClick={() => handleClick(player.player_id)} key={player.player_id}>
              <div className="teaserTop:" key={player.player_id}>
                <div key={player.player_id}><span>{player.name}</span></div>
              </div>
            </div>
            <br></br>
          </div>
        )
      }
    }
    if (players === 0) {
      setPlayers(stateArray)
    }
  }

  useEffect(() => {
    playerList()
  })
  if (!redirect) {
    return (
      <div>
       {players}
      </div>
    );
  } else {
    return (
      <Redirect to={`/Players-details/${PlayerLink}`} />
    )
  }
}
export default PlayerListTable