import React, { useState } from 'react'

import DmApi from '../Api/DmApi'
import TableNavBar from '../components/NavBar/TableNavBar.js'



const PlayerEditPage = (props) => {
  const [playerSubmitted, setPlayerSubmitted] = useState(null)

  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, details } = event.target
    const PlayerObject = {
      player_id: props.props.player_id,
      name: name.value,
      dmtable: props.props.dmtable,
      details: details.value,
    }
    let response = await DmApi.updatePlayer(props.props.player_id, PlayerObject)
    if (response.status === 200) {
      setPlayerSubmitted(true)
    }
  }

  if (playerSubmitted) {
    return (
      window.location.reload()
    )
  } else {
    return (
      <div> 
        <TableNavBar/>
        <form onSubmit={handleEvent}>
          <h2>Edit Your Player</h2>
          <br />
          <input type="text" name="name" defaultValue={ props.props.name }></input>
          <br />
          <input type="text" name="details" defaultValue={ props.props.details }></input>
          <br />
          <button type="submit" name="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PlayerEditPage