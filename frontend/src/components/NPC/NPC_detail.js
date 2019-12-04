import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'

<<<<<<< HEAD
export const NPC_Detail = (props) => {
=======
export const NPC_detail = (props) => {
>>>>>>> 2772b7f58b96232ae909b960a47ce13fb069e5ad
 const [NPC, setNPC] = useState(0)
  useEffect (() => {
   let npcID = props.npcid
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

export default NPC_Detail;
