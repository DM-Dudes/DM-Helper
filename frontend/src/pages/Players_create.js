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
      <div className='background-blue'>
        <TableNavBar/>
        <form onSubmit={handleEvent} className='tablecreateform'>
          <h2>Create Your Player</h2>
          <br />
          <input className="inputcreatePage" type="text" name="name" placeholder="Name your Player..."></input>
          <br />
          <br />
          <input className="inputcreatePage" type="text" name="details" placeholder="Enter player details"></input>
          <br />
          <button className="button2" type="submit" name="submit"><span>Submit</span></button><button className="button2" onClick={() => cancelButtonOnClickHandler()} name="cancel"><span>Cancel</span></button>
        </form>
        <div>
          
        </div>
      </div>
    )
  }
}

export default Player_create;