import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'

export const NPC_detail = (_props) => {

 const [NPC, setNPC] = useState(0)
  useEffect (() => {
   let npcID = 1
   let stateArray = []
   DmAPI.fetchNPCByID(npcID)
   .then((apiResponseJSON) => {
         setNPC(apiResponseJSON)
       }
   )
 }, [])
    return (
      <div>
        {NPC.name}
      </div>
    );
  }

export default NPC_detail;
