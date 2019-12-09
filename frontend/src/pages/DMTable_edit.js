import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";

import DmApi from '../Api/DmApi'
import TableNavBar from '../components/NavBar/TableNavBar.js'


const DMTableEditPage = (props) => {
  let { login } = localStorage.getItem('myValueInLocalStorage')
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
    const reset = () => {
      if(login === false){
        return (<Redirect to='/'/>)
      }
    }
    useEffect(() => {
      reset()
    })

  if (dmTableSubmitted) {
    return (
      window.location.reload()
    )
  } else {
    return (
      <div> 
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