import React, { useState, useEffect } from 'react'

import DmTableDetail from '../components/dmtable/DmTableDetail.js'
import DmApi from '../Api/DmApi.js'

const DMTableDetailsPage = (tableid) => {
  let [dmTable, setDmTable] = useState(null)



  useEffect((tableid) => {
    tableid = 1
    let targetDmTable = ""
    console.log('called')
    DmApi.fetchDMTableByID(tableid)
      .then((apiResponseJSON) => {
        setDmTable(apiResponseJSON)
      }
      )
  }, [])

  return (
    <div>
      <DmTableDetail {...dmTable} />
    </div>
  )

}

export default DMTableDetailsPage


