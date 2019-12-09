import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import DmApi from '../Api/DmApi'


const NpcEditPage = (props) => {
  const [npcSubmitted, setNpcSubmitted] = useState(null)
  let [cancelButton, setCancelButton] = useState(null)
   
  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, hp, ac, details } = event.target
    const NpcObject = {
      npc_id: props.props.npc_id,
      name: name.value,
      dmtable: props.props.dmtable,
      hp: hp.value,
      ac: ac.value,
      details: details.value,
    }
    let response = await DmApi.updateNPC(props.props.npc_id, NpcObject)
    if (response.status === 200) {
      setNpcSubmitted(true)
    }
  }

  const cancelButtonOnClickHandler = () => {
    setCancelButton(<Redirect to={`/table-detail/${props.tableid}`} />)
  }
  
  if (npcSubmitted) {
    return (
      window.location.reload()
    )
  } else {
    return (
      <div> 
        <hr />
        <form className='tablecreateform' onSubmit={handleEvent}>
          <h2>Edit Your NPC</h2>
          <br />
          <input className='inputcreatePage' type="text" name="name" defaultValue={ props.props.name }></input>
          <br />
          <input className='inputcreatePage' type="text" name="hp" defaultValue={ props.props.hp }></input>
          <br />
          <input className='inputcreatePage' type="text" name="ac" defaultValue={ props.props.ac }></input>
          <br />
          <input className='inputcreatePage' type="text" name="details" defaultValue={ props.props.details }></input>
          <br />
          <button className='button2' type="submit" name="submit"><span>Submit</span></button><button className="button2" onClick={() => cancelButtonOnClickHandler()} name="cancel"><span>Cancel</span></button>
        </form>
      </div>
    )
  }
}

export default NpcEditPage