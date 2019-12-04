import React, { setState, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom"
import DmAPI from '../../Api/DmApi.js'

export const NPC_detail = (props) => {
  const { tableid } = props /* John */

  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null) /* John */

  const [NPC, setNPC] = useState(0)

  useEffect(() => {
    let npcID = props.npcid
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
