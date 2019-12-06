import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import DmApi from '../Api/DmApi.js'
import TableNavBar from '../components/NavBar/TableNavBar.js'

export const Player_create = (props) => {
  let { tableid } = props
  let [PlayerSubmitted, setPlayerSubmitted] = useState(null)

  let [cancelButton, setCancelButton] = useState(null)

  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, details } = event.target
    const PlayerObject = {
      name: name.value,
      dmtable: props.tableid,
      details: details.value,
    }
    let response = await DmApi.addPlayer(PlayerObject)
    if (response.status === 201) {
      setPlayerSubmitted(true)
    }
  }

  const cancelButtonOnClickHandler = () => {
    setCancelButton(<Redirect to={`/table-detail/${tableid}`} />)
  }

  if (PlayerSubmitted) {
    return (
      <Redirect to={`/table-detail/${tableid}`} />
    )
  } else if (cancelButton) {
    return cancelButton
  } else {
    return (
      <div>
        <TableNavBar/>
        <form onSubmit={handleEvent}>
          <h2>Create Your Player</h2>
          <br />
          <input type="text" name="name" placeholder="Name your Player..."></input>
          <br />
          <br />
          <input type="text" name="details" placeholder="Enter player details"></input>
          <br />
          <button type="submit" name="submit">Submit</button>
        </form>
        <div>
          <button onClick={() => cancelButtonOnClickHandler()} name="cancel">Cancel</button>
        </div>
      </div>
    )
  }
}

export default Player_create;