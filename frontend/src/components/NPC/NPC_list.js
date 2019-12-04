import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'

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
              stateArray.push(npc.name)
            }
          }
          setNPCs(stateArray)
        })
    }
  }, [])

  return (
    <div>
      {NPCs}
    </div>
  );
}

export default NPC_list;
