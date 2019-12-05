import React, { setState, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom"
import DmAPI from '../../Api/DmApi.js'
import { Redirect } from 'react-router-dom'


export const NPC_detail = (props) => {
  const { tableid } = props /* John */

  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null) /* John */
  
  const [NPC, setNPC] = useState(0)

  const npcID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  useEffect(() => {
    DmAPI.fetchNPCByID(npcID)
      .then((apiResponseJSON) => {
        setNPC(apiResponseJSON)
      }
      )
  }, [])

  const backToTableDetailonClickHandler = () => {  /* John */
    return setBackToTableDetailButton(<Redirect to={`/table-detail/${tableid}`} />)
  }
  if (backToTableDetailButton) {
    return backToTableDetailButton
  } else {
  return (
    <div>
      <div>
        Name = {NPC.name}
        table = {NPC.dmtable}
        HP = {NPC.hp}
        AC = {NPC.ac}
        Details = {NPC.details}
        <div>
          <button onClick={() => handleDelete(npcID)}>KILL MEEEEEEE (this will delete the NPC)</button>
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
