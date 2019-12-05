import React, { useEffect, useState } from 'react';
import Api from '../Api/DmApi.js'
import { Redirect } from "react-router-dom"
import TableNavBar from '../components/NavBar/TableNavBar.js'


const Player_details = (props) => {
  const { tableid } = props
  console.log(props)
  const [playerinfo, setPlayerInfo] = useState('');
  const [player, setPlayer] = useState(null)
  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
  

  const playerID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

   useEffect(() => {
    Api.fetchPlayerByID(playerID)
      .then((apiResponseJSON) => {
        setPlayer(apiResponseJSON)
        console.log(playerID)
      }
      )
  }, [])
  const backToTableDetailonClickHandler = () => { 
    return setBackToTableDetailButton(<Redirect to={`/table-detail/${tableid}`} />)
  }
  const handleDelete = async () => {
    return await Api.deletePlayer(playerID)
  }
  if (backToTableDetailButton) {
    return backToTableDetailButton
  }
  if (player){
  return (
    <div>
      <TableNavBar/>
        <div>
          Name = {player.name}
          <br/>
          table = {player.dmtable}
          <br/>
          details = {player.details}
          <br/>
          <div>
            <button onClick={handleDelete}>delete Player</button>
          </div>
        </div>
        <br/>
              <div>
          <button onClick={() => backToTableDetailonClickHandler()} name="back">Back to Table</button>
        </div>
    </div>

  );}
  else{
    return(
      <div>loading player</div>
    )
  }
}

export default Player_details;
