import React, { useEffect, useState } from 'react';
import Api from '../Api/DmApi.js'
import { Redirect } from "react-router-dom"
import TableNavBar from '../components/NavBar/TableNavBar.js'
import PlayerEditPage from '../pages/Player_edit.js'
import CombatPage from './CombatPage.js'


const Player_details = (props) => {
  const [player, setPlayer] = useState(null)
  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
  const [editPlayerClick, setEditPlayerClick] = useState(null)

  const playerID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  useEffect(() => {
    Api.fetchPlayerByID(playerID)
      .then((apiResponseJSON) => {
        setPlayer(apiResponseJSON)
      }
      )
  }, [playerID])

  const handleEditButtonClick = () => {
    setEditPlayerClick(true)
  }

  if (editPlayerClick === true) {
    return (
      <div>
        <PlayerEditPage props={player} editStatus={setEditPlayerClick} />    
      </div>
    )
  }

  const backToTableDetailonClickHandler = () => {
    return setBackToTableDetailButton(true),
      <Redirect to={`/table-detail/${player.dmtable}`} />
  }
  const handleDelete = async () => {
    await Api.deletePlayer(playerID)
    return setBackToTableDetailButton(true)
  }
  if (backToTableDetailButton === true) {
    return <Redirect to={`/table-detail/${player.dmtable}`} />
  }
  if (player) {
    return (
      <div>
        <TableNavBar />
        <CombatPage/>
        <div>
          Name = {player.name}
          <br />
          table = {player.dmtable}
          <br />
          details = {player.details}
          <br />
          <div>
            <button onClick={() => handleEditButtonClick()}>
              Edit Player
            </button>
          </div>
          <div>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this Player?')) handleDelete() }}>Delete Player</button>
          </div>
        </div>
        <br />
        <div>
          <button onClick={() => backToTableDetailonClickHandler()} name="back">Back to Table</button>
        </div>
      </div>

    );
  }
  else {
    return (
      <div>loading player</div>
    )
  }
}

export default Player_details;