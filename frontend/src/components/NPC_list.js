 import React, { useState, useEffect } from 'react';
 import DmAPI from '../Api/DmApi.js'
 
 export const NPC_list = () => {

  const [NPCs, setNPCs] = useState()

  useEffect(() => {
    DmAPI.fetchNPCs()
    .then((apiResponseJSON) => {
      setNPCs(apiResponseJSON)
    })
  })

     return (
       <div>
         {NPCs}
       </div>
     );
   }
 
 
 export default NPC_list;

