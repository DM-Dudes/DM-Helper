import NPC_list from '../NPC/NPC_list';
import PlayerListTable from '../player/PlayerListTable.js';
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";
import "../../App.css";





const DmTableDetail = (props) => {
  const [newNPC, setNewNPC] = useState(null)
  const [newPlayer, setNewPlayer] = useState(null)

  const { name, userdmtable, story, notes, dmtable_id } = props
  console.log(props)
  const addNpcOnClickHandler = () => {
    console.log("called")
    setNewNPC(<Redirect to="/create-npc" />)
  }

  const addPlayerOnClickHandler = () => {
    console.log("called")
    setNewNPC(<Redirect to="/create-npc" />)
  }

  if (!newNPC) {
    return (
      <div>
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
            <div className="NPC_Player_List_box">
              <MDBBtn onClick={ () => addNpcOnClickHandler() } color="default">
                Add NPC <MDBIcon  icon="plus" className="ml-1" />
              </MDBBtn>
                <div>
                  <h3>NPCs</h3>
                  <NPC_list tableid={dmtable_id}/>
                </div>
              <MDBBtn onClick={ () => addPlayerOnClickHandler() } color="default">
                Add Player <MDBIcon  icon="plus" className="ml-1" />
              </MDBBtn>
              <div>
                <h3>Players</h3>
                <PlayerListTable tableid={dmtable_id}/>
              </div>
              </div>
            </Fragment>
          </div>
          


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