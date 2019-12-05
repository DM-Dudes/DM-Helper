import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import TableNavBar from '../components/NavBar/TableNavBar.js'
import DmTableDetail from '../components/dmtable/DmTableDetail.js'
import DmApi from '../Api/DmApi.js'

const DMTableDetailsPage = (props) => {
  let { tableid } = props
  let [dmTable, setDmTable] = useState(null)
  let [editClick, setEditClick] = useState(null)

  useEffect(() => {

    DmApi.fetchDMTableByID(tableid)
      .then((apiResponseJSON) => {
        setDmTable(apiResponseJSON) /* don't do this anymore: no more setState inside of useEffect */
      }
      )
  }, [])

  const handleEditButtonClick = () => {
    setEditClick(true)
  }
  
  if (editClick) {
    return (
      <Redirect to={"/edit-table/1"}/>
    )
  }

  if (dmTable === null) {
    return (
      <div>
        No soup for you.
      </div>
    )
  } else {
    return (
      <div>
        <div>
        <TableNavBar/>
      </div>
      <div>
        <button onClick={() => handleEditButtonClick()}>Edit Table</button>
      </div>
        <DmTableDetail {...dmTable} />
      </div>
    )
  }
}

export default DMTableDetailsPage


