import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import TableNavBar from "../components/NavBar/TableNavBar.js"

import DmApi from '../Api/DmApi'


const DMTableCreatePage = (props) => {
  let [dmTableSubmitted, setdmTableSubmitted] = useState(null)
  let [cancelButton, setCancelButton] = useState(null)

  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, story, notes } = event.target
    const DMTableObject = {
      userdmtable: JSON.parse(sessionStorage.getItem("currentUser_id")),
      name: name.value,
      story: story.value,
      notes: notes.value,
    }
    let response = await DmApi.addDMTable(DMTableObject)
    if (response.status === 201) {
      setdmTableSubmitted(true)
    }
  }

  const cancelButtonOnClickHandler = () => {
    setCancelButton(<Redirect to={`/table-detail/${props.tableid}`} />)
  }

  if (dmTableSubmitted) {
    return (
      <Redirect to="/" />
    )
  } else if (cancelButton) {
    return cancelButton
  } else {
    return (
      <div className='background-blue'>
        <TableNavBar/>
        <form onSubmit={handleEvent} className='tablecreateform'>
          <h2>Create Your Table</h2>
          <br />
          <input className="inputcreatePage" type="text" name="name" placeholder="Name your Table..."></input>
          <br />
          <input className="inputcreatePage" type="text" name="story" placeholder="Craft your story here..."></input>
          <br />
          <input className="inputcreatePage" type="text" name="notes" placeholder="Notes about your story..."></input>
          <br />
          <div>
            <button className="button2" type="submit" name="submit"><span>Submit</span></button><button className="button2" onClick={() => cancelButtonOnClickHandler()} name="cancel"><span>Cancel</span></button>
          </div>
          <div>
            
          </div>
        </form>
      </div>
    )
  }
}


export default DMTableCreatePage