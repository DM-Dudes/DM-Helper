import React, { useState } from 'react'

import DmApi from '../Api/DmApi'


const DMTableEditPage = (props) => {
  let [dmTableSubmitted, setdmTableSubmitted] = useState(null)

  const handleEvent = async (event) => {
    event.preventDefault()
    let { name, story, notes } = event.target
    const DMTableObject = {
      userdmtable: props.props.userdmtable,
      name: name.value,
      story: story.value,
      notes: notes.value,
    }
    let response = await DmApi.updateDMTable(props.props.dmtable_id, DMTableObject)
    if (response.status === 200) {
      setdmTableSubmitted(true)
    }
  }


  if (dmTableSubmitted) {
    return (
      window.location.reload()
    )
  } else {
    return (
      <div> 
        <hr />
        <form onSubmit={handleEvent}>
          <h2>Edit Your Table</h2>
          <br />
          <input type="text" name="name" defaultValue={ props.props.name }></input>
          <br />
          <input type="text" name="story" defaultValue={ props.props.story }></input>
          <br />
          <input type="text" name="notes" defaultValue={ props.props.notes }></input>
          <br />
          <button type="submit" name="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default DMTableEditPage