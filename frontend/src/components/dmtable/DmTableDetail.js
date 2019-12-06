import NPCList from '../NPC/NPC_list';
import PlayerListTable from '../player/PlayerListTable.js';
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import DMTableEditPage from "../../pages/DMTable_edit.js"
import DmApi from "../../Api/DmApi.js"
import "../../App.css";

const DmTableDetail = (props) => {

  let [editTableClick, setEditTableClick] = useState(null)
  let [deleteTableClick, setDeleteTableClick] = useState(null)
  
  const { name, story, notes, dmtable_id } = props

  const handleDeleteTable = async () => {
    await DmApi.deleteDMTable(dmtable_id)
    return setDeleteTableClick(true)
  }
  if (deleteTableClick === true) {
    return <Redirect to="/" />
  }
  

  const handleEditButtonClick = () => {
    setEditTableClick(true)
  }

  if (editTableClick === true) {
    return (
      <div>
        <DMTableEditPage props={props} editStatus={setEditTableClick} />
      </div>
    )
  }

  
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleEditButtonClick()}>
              Edit Table
            </button>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this table?')) handleDeleteTable() }}>
              Delete
            </button>
          </div>
          <div>
            <h1>
              {name}
            </h1>
            <p>
              {story}
            </p>
            <p>
              {notes}
            </p>
            </div>
           <Fragment>
            <div className="NPC_Player_List_box">
                <div>
                  <h3>NPCs</h3>
                  <NPCList tableid={dmtable_id}/>
                </div>
              <div>
                <h3>Players</h3>
                <PlayerListTable tableid={dmtable_id}/>
        </div>
      </div>
            </Fragment>
            </div>
            </div>
     
     )
     


}
export default DmTableDetail