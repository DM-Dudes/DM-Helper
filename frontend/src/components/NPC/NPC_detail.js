import React, { setState, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom"
import DmAPI from '../../Api/DmApi.js'
import DmApi from '../../Api/DmApi.js';


export const NPC_detail = (props) => {
  const { tableid } = props

  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
  
  const [NPC, setNPC] = useState(0)

  const npcID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  useEffect(() => {
    DmAPI.fetchNPCByID(npcID)
      .then((apiResponseJSON) => {
        setNPC(apiResponseJSON)
      }
      )
  }, [])
  
  const handleDelete = async () => {
    console.log(npcID)
    return await DmApi.deleteNPC(npcID)
  }

  const backToTableDetailonClickHandler = () => { 
    return setBackToTableDetailButton(<Redirect to={`/table-detail/${tableid}`} />)
  }
  if (backToTableDetailButton) {
    return backToTableDetailButton
  } else {
  return (
    <div>
      <div>
        Name = {NPC.name}
        <br/>
        table = {NPC.dmtable}
        <br/>
        HP = {NPC.hp}
        <br/>
        AC = {NPC.ac}
        <br/>
        Details = {NPC.details}
        <br/>
        <div>
          <button onClick={handleDelete}>KILL MEEEEEEE (this will delete the NPC)</button>
        </div>
      </div>
      <br />
      <div>
        <button onClick={() => backToTableDetailonClickHandler()} name="back">Back to Table</button>
      </div>
    </div>

  );
}
}
export default NPC_detail;
