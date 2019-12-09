import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import DmApi from '../Api/DmApi'
import TableNavBar from '../components/NavBar/TableNavBar.js'



const PlayerEditPage = (props) => {
  let { tableid } = props
  const [playerSubmitted, setPlayerSubmitted] = useState(null)
  let [cancelButton, setCancelButton] = useState(null)

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

  const cancelButtonOnClickHandler = () => {
    setCancelButton(<Redirect to={`/table-detail/${tableid}`} />)
  }

  if (playerSubmitted) {
    return (
      window.location.reload()
    )
  } else {
    return (
      <div> 
        <TableNavBar/>
        <form className='tablecreateform' onSubmit={handleEvent}>
          <h2>Edit Your Player</h2>
          <br />
          <input className='inputcreatePage' type="text" name="name" defaultValue={ props.props.name }></input>
          <br />
          <input className='inputcreatePage' type="text" name="details" defaultValue={ props.props.details }></input>
          <br />
          <button className='button2' type="submit" name="submit"><span>Submit</span></button><button className="button2" onClick={() => cancelButtonOnClickHandler()} name="cancel"><span>Cancel</span></button>
        </form>
      </div>
    )
  }
}

export default PlayerEditPage