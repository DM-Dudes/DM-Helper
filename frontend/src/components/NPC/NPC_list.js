import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import { Redirect } from 'react-router-dom'
import './NPC.css'


export const NpcList = (props) => {

  const [NPCs, setNPCs] = useState(0)
  const [redirect, setRedirect] = useState(null)
  const [NpcLink, setNpcLink] = useState(null)
  const { tableid } = props
  useEffect(() => {

    if (tableid) {
      let stateArray = []
      DmAPI.fetchNPCs()
        .then((apiResponseJSON) => {
          for (let npc of apiResponseJSON) {
            if (npc.dmtable === tableid) {
              stateArray.push(
                <div>
                    <div className="npcTeaserBox" onClick={() => handleClick(npc.npc_id)}>
                      <div className="teaserTop:">
                        <div>{npc.name}</div>
                      </div>
                    </div>
                  <br></br>
                </div>
                // <div key={npc.npc_id}>
                //   <button onClick={() => handleClick(npc.npc_id)}>
                //     <div>{npc.name}</div>
                //   </button>
                // </div>
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
