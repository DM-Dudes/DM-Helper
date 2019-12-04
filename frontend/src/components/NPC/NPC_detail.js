import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'

export const NPC_detail = (props) => {
 const [NPC, setNPC] = useState(0)
 const npcID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  useEffect (() => {
   DmAPI.fetchNPCByID(npcID)
   .then((apiResponseJSON) => {
         setNPC(apiResponseJSON)
       }
   )
 }, [])
    return (
      <div>
        Name = {NPC.name} 
        table = {NPC.dmtable} 
        HP = {NPC.hp} 
        AC = {NPC.ac} 
        Details = {NPC.details}
      </div>
    );
  }

export default NPC_detail;
