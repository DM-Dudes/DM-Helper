import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import { Redirect } from 'react-router-dom'


export const NPC_list = (props) => {

  const [NPCs, setNPCs] = useState(0)

  useEffect(() => {

    if (props.tableid) {
      let tableid = props.tableid
      let stateArray = []
      DmAPI.fetchNPCs()
        .then((apiResponseJSON) => {
          for (let npc of apiResponseJSON) {
            if (npc.dmtable === tableid) {
              stateArray.push(
                <div>{npc.name} <button onclick={handleClick(npc.npc_id)}>click me to go!</button></div>
                )
            }
          }
          setNPCs(stateArray)
        })
    }
  }, [])

  const handleClick = NPC_id => {
    return (
      <Redirect to={`/NPC-detail/${NPC_id}`}/>
    )
  }

  return (
    <div>
      {NPCs}
    </div>
  );
}

export default NPC_list;
