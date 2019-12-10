import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import DmApi from '../Api/DmApi'
import TableNavBar from '../components/NavBar/TableNavBar.js'


const DMTableEditPage = (props) => {
  let { login } = localStorage.getItem('myValueInLocalStorage')
  let [dmTableSubmitted, setdmTableSubmitted] = useState(null)
  let [cancelButton, setCancelButton] = useState(null)
  
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

    const cancelButtonOnClickHandler = () => {
      setCancelButton(<Redirect to={`/table-detail/${props.tableid}`} />)
    }

  if (dmTableSubmitted) {
    return (
      window.location.reload()
    )
  } else {
    return (
      <div> 
        <form className='tablecreateform' onSubmit={handleEvent}>
          <h2>Edit Your Table</h2>
          <br />
          <input className='inputcreatePage' type="text" name="name" defaultValue={ props.props.name }></input>
          <br />
          <input className='inputcreatePage' type="text" name="story" defaultValue={ props.props.story }></input>
          <br />
          <input className='inputcreatePage' type="text" name="notes" defaultValue={ props.props.notes }></input>
          <br />
          <button className='button2' type="submit" name="submit"><span>Submit</span></button><button className="button2" onClick={() => cancelButtonOnClickHandler()} name="cancel"><span>Cancel</span></button>
        </form>
      </div>
    )
  }
}


export default DMTableEditPage