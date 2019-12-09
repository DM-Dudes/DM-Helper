import React, { useState, useEffect } from 'react'
import TableNavBar from '../components/NavBar/TableNavBar.js'
import DmTableDetail from '../components/dmtable/DmTableDetail.js'
import DmApi from '../Api/DmApi.js'


const DMTableDetailsPage = (props) => {
  let { tableid } = props
  let [dmTable, setDmTable] = useState(null)

  useEffect(() => {
    DmApi.fetchDMTableByID(tableid)
      .then((apiResponseJSON) => {
        setDmTable(apiResponseJSON) /* don't do this anymore: no more setState inside of useEffect */
      }
      )
      
  }, [tableid])
  const refresh = () => {
    if (tableid !== sessionStorage.getItem("currentTable_id")) {
      window.location.reload()
    }
  }

  useEffect(() => {
    refresh()
  })

  if (dmTable === null) {
    return (
      <div>
        Loading...
      </div>
    )
  } else {
    return (
      <div>
        <TableNavBar />
        <div>
          <DmTableDetail {...dmTable} />
        </div>
      </div>
    )
  }
}

export default DMTableDetailsPage