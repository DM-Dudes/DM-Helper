import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import DmApi from '../Api/DmApi'


const DMTableEditPage = (props) => {
  let { tablid } = props
  let [dmTableSubmitted, setdmTableSubmitted] = useState(null)

  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, story, notes } = event.target
    const DMTableObject = {
      userdmtable: tablid,
      name: name.value,
      story: story.value,
      notes: notes.value,
    }
    let response = await DmApi.updateDMTable(tablid, DMTableObject)
    if (response.status === 200) {
      setdmTableSubmitted(true)
    }
  }


  if (dmTableSubmitted) {
    return (
      <Redirect to="/table-detail/1" />
    )
  } else {
    return (
      <div> 
        <hr />
        <form onSubmit={handleEvent}>
          <h2>Edit Your Table</h2>
          <br />
          <input type="text" name="name" placeholder="Name your Table..."></input>
          <br />
          <input type="text" name="story" placeholder="Craft your story here..."></input>
          <br />
          <input type="text" name="notes" placeholder="Notes about your story..."></input>
          <br />
          <button type="submit" name="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default DMTableEditPage