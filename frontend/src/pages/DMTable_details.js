import React, { useState, useEffect } from 'react'

import DmTableDetail from '../components/dmtable/DmTableDetail.js'
import DmApi from '../Api/DmApi.js'

const DMTableDetailsPage = (props) => {
  let {tableid} = props
  let [dmTable, setDmTable] = useState(null)
  
  useEffect(() => {
    
    DmApi.fetchDMTableByID(tableid)
    .then((apiResponseJSON) => {
      setDmTable(apiResponseJSON) /* don't do this anymore: no more setState inside of useEffect */
    }
    )
  }, [])
  
  if (dmTable === null) {
    return (
      <div>
        No soup for you.
      </div>
    )
  } else {
  return (
    <div>
      <DmTableDetail {...dmTable} />
    </div>
  )
  }
}

export default DMTableDetailsPage


