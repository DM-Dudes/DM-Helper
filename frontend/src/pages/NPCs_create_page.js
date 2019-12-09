import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import DmApi from '../Api/DmApi.js'
import TableNavBar from '../components/NavBar/TableNavBar.js'

export const NPC_create_page = (props) => {
  let { tableid } = props
  let [NPCSubmitted, setNPCSubmitted] = useState(null)
  let [cancelButton, setCancelButton] = useState(null)

  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, hp, ac, details } = event.target
    const NPCObject = {
      dmtable: props.tableid,
      name: name.value,
      hp: hp.value,
      ac: ac.value,
      details: details.value,
    }
    let response = await DmApi.addNPC(NPCObject)
    if (response.status === 201) {
      setNPCSubmitted(true)
    }
  }

  const cancelButtonOnClickHandler = () => {
    setCancelButton(<Redirect to={`/table-detail/${props.tableid}`} />)
  }

  if (NPCSubmitted) {
    return (
      <Redirect to={`/table-detail/${tableid}`} />
    )
  } else if (cancelButton) {
    return cancelButton
  } else {
    return (
      <div className='background-blue'>
        <TableNavBar/>
          <hr />
          <form onSubmit={handleEvent} className='tablecreateform'>
            <h2>Create Your NPC</h2>
            <br />
            <input className="inputcreatePage" type="text" name="name" placeholder="Name your NPC"></input>
            <br />
            <br />
            <input className="inputcreatePage" type="text" name="hp" placeholder="Enter HP value"></input>
            <br />
            <br />
            <input className="inputcreatePage" type="text" name="ac" placeholder="Enter AC value"></input>
            <br />
            <br />
            <input className="inputcreatePage" type="text" name="details" placeholder="Enter attack details"></input>
            <br />
            <button className="button2" type="submit" name="submit"><span>Submit</span></button><button className="button2" onClick={() => cancelButtonOnClickHandler()} name="cancel"><span>Cancel</span></button>
          </form>
          <div>
            
          </div>
      </div>
    )
  }
}

export default NPC_create_page;