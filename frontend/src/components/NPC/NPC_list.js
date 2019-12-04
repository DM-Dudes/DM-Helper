 import React, { useState, useEffect } from 'react';
 import DmAPI from '../../Api/DmApi.js'
 
 export const NPC_list = (_props) => {

  const [NPCs, setNPCs] = useState(0)
  React.useEffect (() => {
    let tableid = 1
    let stateArray = []
    DmAPI.fetchNPCs()
    .then((apiResponseJSON) => {
      for(let npc of apiResponseJSON){
        if(npc.dmtable === tableid){
        stateArray.push(npc.name)
          setNPCs(stateArray)
        }
      }
    })
  }, [])

     return (
       <div>
         {NPCs}
       </div>
     );
   }
 
 export default NPC_list;
