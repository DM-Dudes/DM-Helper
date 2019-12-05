import NPC_list from '../NPC/NPC_list';
import PlayerListTable from '../player/PlayerListTable.js';
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";
import DMTableEditPage from "../../pages/DMTable_edit.js"







const DmTableDetail = (props) => {
  const [newNPC, setNewNPC] = useState(null)
  const [newPlayer, setNewPlayer] = useState(null)
  let [editTableClick, setEditTableClick] = useState(null)

  const { name, userdmtable, story, notes, dmtable_id } = props

  const handleEditButtonClick = () => {
    setEditTableClick(true)
  }

  const addNpcOnClickHandler = () => {
    console.log("called")
    setNewNPC(<Redirect to="/create-npc" />)
  }

  const addPlayerOnClickHandler = () => {
    console.log("called")
    setNewNPC(<Redirect to="/create-npc" />)
  }

  if (editTableClick === true) {
    return (
      <div>
        <DMTableEditPage props={props} editStatus={setEditTableClick} />
      </div>
    )
  }

  if (!newNPC) {
    return (
      <div>
        <div>
          <div>
            <button onClick={() => handleEditButtonClick()}>Edit Table</button>
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
            <div>
              <Fragment>
                <MDBBtn onClick={() => addNpcOnClickHandler()} color="default">
                  Add NPC <MDBIcon icon="plus" className="ml-1" />
                </MDBBtn>
                <MDBBtn onClick={() => addPlayerOnClickHandler()} color="default">
                  Add Player <MDBIcon icon="plus" className="ml-1" />
                </MDBBtn>
              </Fragment>
            </div>
          </div>
        </div>
        <div>
          <h3>NPCs</h3>
          <NPC_list tableid={dmtable_id} />
        </div>
        <div>
          <h3>Players</h3>
          <PlayerListTable tableid={dmtable_id} />
        </div>
      </div>
    );
  } else {
    return (
      newNPC
    )
  }


}
export default DmTableDetail