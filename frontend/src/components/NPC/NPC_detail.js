import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import { Redirect } from 'react-router-dom'


export const NPC_detail = (props) => {
 const [NPC, setNPC] = useState('loading')
 const [deleteDirect, setDeleteDirect] = useState(null)
 const npcID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  console.log(NPC)
  useEffect (() => {
   DmAPI.fetchNPCByID(npcID)
   .then((apiResponseJSON) => {
         setNPC(apiResponseJSON)
       }
   )
  }, [])

  const handleDelete = async (id) => {
    console.log(id)
    let response = await DmAPI.deleteNPC(id)
    if (response.status === 201) {
      setDeleteDirect(true)
  }}
  if (deleteDirect){
    return(
      <Redirect to={`/table-detail/${NPC.dmtable}`}/>
    )
  }else{
    return (
      <div>
        Name = {NPC.name} 
        table = {NPC.dmtable} 
        HP = {NPC.hp} 
        AC = {NPC.ac} 
        Details = {NPC.details}
        <div>
          <button onClick={() => handleDelete(npcID)}>KILL MEEEEEEE (this will delete the NPC)</button>
        </div>
      </div>
    );
  }
}

export default NPC_detail;
