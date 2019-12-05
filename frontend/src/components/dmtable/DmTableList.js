import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import { Redirect } from 'react-router-dom'


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
            if (table.userdmtable == userid) {
              
              stateArray.push(
                <div key={table.table_id}><button onClick={() => handleClick(table.userdmtable)}><div>{table.name}</div></button></div>
                )
            }
          }
          setTables(stateArray)
        })
    }
  }, [props])

  const handleClick = (table_id) => {
    setRedirect(true)
    setTableLink(table_id)
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
