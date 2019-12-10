import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import DMTableEditPage from "../../pages/DMTable_edit.js"
import DmApi from "../../Api/DmApi.js"
import "./DmTableDetail.css";
import NpcList from "../NPC/NPC_list"
import PlayerListTable from "../player/PlayerListTable"

const DmTableDetail = (props) => {
  let [editTableClick, setEditTableClick] = useState(null)
  let [deleteTableClick, setDeleteTableClick] = useState(null)
  let [npcCreateClick, setNpcCreateClick] = useState(null)
  let [playerCreateClick, setPlayerCreateClick] = useState(null)
  let [backClick, setBackClick] = useState(null)


  const { name, story, notes, dmtable_id } = props

  useEffect(() => {
    document.body.style.backgroundColor = "#071132"
  }, [])

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
  const handleNpcCreateButtonClick = () => {
    setNpcCreateClick(true)
  }
  const handlePlayerCreateButtonClick = () => {
    setPlayerCreateClick(true)
  }

  const handleBackClick = () => {
    setBackClick(true)
  }

  if (editTableClick === true) {
    return (
      <div>
        <DMTableEditPage props={props} editStatus={setEditTableClick} />
      </div>
    )
  }
  if (npcCreateClick) {
    return <Redirect to={"/create-npc"} />
  }

  if (playerCreateClick) {
    return <Redirect to={"/create-player"} />
  }

  if (backClick) {
    return <Redirect to={"/"} />
  }


  return (
    <div className="body">
      <div className="name-banner">
        <div>
            <div className="back-button-banner">
              <div className="back-button" onClick={() => handleBackClick()}>
                BACK
            </div>
            </div>
        </div>
        <div className="name-banner-l2">
          <div className="table-title">
            {name}
          </div>
          <div className="edit-delete-div">
            <div className="delete-button" >
              <div onClick={() => { if (window.confirm('Are you sure you wish to delete this table?')) handleDeleteTable() }} className="delete-table-text"> DELETE TABLE </div>
            </div>
            <div className="edit-button" onClick={() => handleEditButtonClick()}>
              <div className="edit-table-text"><span>EDIT TABLE</span></div>
            </div>
          </div>
        </div>
      </div>
      {/*This is the top level of the story/notes body portion of the page*/}
      <div className="story-notes">
        <div className="story-notes-titles">
          <div className="story-title">Story</div>
          <div className="notes-title">Notes</div>
        </div>
        <div className="story-notes-content-div">
          <div className="story">{story}</div>
          <div className="notes">{notes}</div>
        </div>
      </div>
      <div className="divider-line"></div>
      {/* this is where players and npcs are going */}
      <div className="players-npcs-div">
        <div className="spacer"></div>
        <div className="player-npc-banner">
          <div className="player-banner">
            <div className="player-title">Players</div>
            <div className="new-player-button" onClick={handlePlayerCreateButtonClick} >
              <div className="new-player-text"><span>ADD PLAYER</span></div>
            </div>
          </div>
          <div className="npc-banner">
            <div className="npc-title">Non-Player Characters</div>
            <div className="new-npc-button" onClick={handleNpcCreateButtonClick} >
              <div className="new-npc-text"><span>ADD NPC</span></div>
            </div>
          </div>
        </div>
        <div className="spacer2"></div>
        <div className="Player-NPC-lists">
          <div>
            <PlayerListTable tableid={dmtable_id}/>
          </div>
          <div className="npc-list">
            <NpcList tableid={dmtable_id}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DmTableDetail
