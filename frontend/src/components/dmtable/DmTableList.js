import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

import DmAPI from '../../Api/DmApi.js'


export const DmTableList = (props) => {
  let [tables, setTables] = useState(null)
  const [redirect, setRedirect] = useState(null)
  const [TableLink, setTableLink] = useState(null)
  useEffect(() => {
    if (props.userId) {
      let userid = props.userId
      let stateArray = []
      DmAPI.fetchDMTables()
        .then((apiResponseJSON) => {
          for (let table of apiResponseJSON) {
            if (table.userdmtable === userid) {
              stateArray.push(
                <div key={table.dmtable_id}>{table.name} <button onClick={() => handleClick(table.dmtable_id)}>click me to go!</button></div>
                )
            }
          }
          setTables(stateArray)
        })
    }
  }, [props.userId])

  const handleClick = async (table_id) => {
    setRedirect(true)
    setTableLink(table_id)
    await sessionStorage.setItem("currentTable_id", JSON.stringify(table_id))
   
  }
  
  if(!redirect){
    return (
      <div>
      <h2>YOUR TABLES</h2>
        {tables}
      </div>
    )
  }else{
    return(
      <Redirect to={`/table-detail/${TableLink}`}/>
    )
  }

}

export default DmTableList;
