import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import './dmTableList.css'
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
                <div key={table.dmtable_id}>
                    <div className="tableTeaserBox" key={table.dmtable_id} onClick={() => handleClick(table.dmtable_id)} >
                      <div className="teaserTop:" key={table.dmtable_id}>
                        <div key={table.dmtable_id}>{table.name}</div>
                      </div>
                    </div>
                  <br></br>
                </div>
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
      <div >
      <h1 className='h1font'>YOUR TABLES</h1>
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
