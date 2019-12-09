import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

import DMTableEditPage from "../../pages/DMTable_edit.js"
import DmApi from "../../Api/DmApi.js"
import "../../App.css";
import NpcList from '../../components/NPC/NPC_list.js'
import PlayerListTable from '../player/PlayerListTable.js';


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
          <div>
            <button onClick={() => handleEditButtonClick()}>
              Edit Table
            </button>
          </div>
          <button onClick={() => { if (window.confirm('Are you sure you wish to delete this table?')) handleDeleteTable() }}>
            Delete Table
            </button>
        </div>
        <div>
          <h1>
            Here is the name of the table : {name}
          </h1>
          <p>
            Here is the textfield for the story : {story}
          </p>
          <p>
            Here is the textfield for the notes : {notes}
          </p>
        </div>
        <Fragment>
          <div className="NPC_Player_List_box">
            <div>
              <h3>NPCs (below this is a list of NPC s)</h3>
              <NpcList tableid={dmtable_id} />
            </div>
            <div>
              <h3>Players (below this is a list of players) </h3>
              <PlayerListTable tableid={dmtable_id} />
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  )
}
export default DmTableDetail