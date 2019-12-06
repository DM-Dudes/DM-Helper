import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import { Redirect } from 'react-router-dom'


export const NpcList = (props) => {

  const [NPCs, setNPCs] = useState(0)
  const [redirect, setRedirect] = useState(null)
  const [NpcLink, setNpcLink] = useState(null)

  useEffect(() => {
    if (props.tableid) {
      let tableid = props.tableid
      let stateArray = []
      DmAPI.fetchNPCs()
        .then((apiResponseJSON) => {
          for (let npc of apiResponseJSON) {
            if (npc.dmtable === tableid) {
              stateArray.push(
                <div key={npc.npc_id}>
                  <button onClick={() => handleClick(npc.npc_id)}>
                    <div>{npc.name}</div>
                  </button>
                </div>
              )
            }
          }
          setNPCs(stateArray)
        })
    }
  }, [props.tableid])

  const handleClick = (NPC_id) => {
    setRedirect(true)
    setNpcLink(NPC_id)
  }

  if (!redirect) {
    return (
      <div>
        {NPCs}
      </div>
    );
  } else {
    return (
      <Redirect to={`/NPC-detail/${NpcLink}`} />
    )
  }
}

export default NpcList;
