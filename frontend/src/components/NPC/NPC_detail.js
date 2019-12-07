import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom"

import DmAPI from '../../Api/DmApi.js'
import TableNavBar from '../../components/NavBar/TableNavBar.js'
import NpcEditPage from '../../pages/NPC_edit.js'

export const NPC_detail = (props) => {
  const { tableid } = props
  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
  const [deleteNpcClick, setDeleteNpcClick] = useState(null)
  const [NPC, setNPC] = useState(0)
  const [editNpcClick, setEditNpcClick] = useState(null)
  const npcID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  const handleEditButtonClick = () => {
    setEditNpcClick(true)
  }

  useEffect(() => {
    DmAPI.fetchNPCByID(npcID)
      .then((apiResponseJSON) => {
        setNPC(apiResponseJSON)
      }
      )
  },[npcID])
  
  const handleDeleteNPC = async () => {
    await DmAPI.deleteNPC(npcID)
    return setDeleteNpcClick(true)
  }
  if (deleteNpcClick === true) {
    return <Redirect to={`/table-detail/${tableid}`} />
  }

  if (editNpcClick === true) {
    return (
      <div>
        <NpcEditPage props={NPC} editStatus={setEditNpcClick} /> {/* change this */}
      </div>
    )
  }

  const backToTableDetailonClickHandler = () => {
    return setBackToTableDetailButton(<Redirect to={`/table-detail/${tableid}`} />)
  }
  if (backToTableDetailButton) {
    return backToTableDetailButton
  } else {
    return (
      <div>
        <TableNavBar />
        <div>
          Name = {NPC.name}
          <br />
          table = {NPC.dmtable}
          <br />
          HP = {NPC.hp}
          <br />
          AC = {NPC.ac}
          <br />
          Details = {NPC.details}
          <br />
          <div>
            <button onClick={() => handleEditButtonClick()}>
              Edit NPC
          </button>
          </div>
          <div>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this NPC?')) handleDeleteNPC() }}>Delete NPC</button>
          </div>
        </div>
        <br />
        <div>
          <button onClick={() => backToTableDetailonClickHandler()} name="back">Back to Table</button>
        </div>
      </div>

    );
  }
}
export default NPC_detail;
