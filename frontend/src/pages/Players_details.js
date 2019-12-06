import React, { useEffect, useState } from 'react';
import Api from '../Api/DmApi.js'
import { Redirect } from "react-router-dom"
import TableNavBar from '../components/NavBar/TableNavBar.js'


const Player_details = (props) => {
  console.log("PlayerDetails props", props)
  const { tableid } = props
  const [player, setPlayer] = useState(null)
  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)

  const playerID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  console.log("tablid at top of playersdetail", tableid)
   useEffect(() => {
    Api.fetchPlayerByID(playerID)
      .then((apiResponseJSON) => {
        setPlayer(apiResponseJSON)
      }
      )
  }, [props])

  
  const backToTableDetailonClickHandler = () => { 
    setBackToTableDetailButton(true)
    return (
    <Redirect to={`/table-detail/${player.dmtable}`} />
    )
  }
  const handleDelete = async () => {
    await Api.deletePlayer(playerID)
    return setBackToTableDetailButton(true)
  }
  if (backToTableDetailButton === true) {
    return <Redirect to={`/table-detail/${player.dmtable}`} />
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
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this Player?'))handleDelete()}}>Delete Player</button>
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
