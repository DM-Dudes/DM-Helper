import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap'
import { Redirect } from "react-router-dom"


import DmAPI from '../../Api/DmApi.js'
import TableNavBar from '../../components/NavBar/TableNavBar.js'
import NpcEditPage from '../../pages/NPC_edit.js'
import "./NPC_detail.css"

export const NPC_detail = (props) => {
  const { tableid } = props
  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
  const [deleteNpcClick, setDeleteNpcClick] = useState(null)
  const [NPC, setNPC] = useState(0)
  const [editNpcClick, setEditNpcClick] = useState(null)
  let [backClick, setBackClick] = useState(null)
  const npcID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  const handleEditButtonClick = () => {
    setEditNpcClick(true)
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#071132"
    DmAPI.fetchNPCByID(npcID)
      .then((apiResponseJSON) => {
        setNPC(apiResponseJSON)
      }
      )
  }, [npcID])

  const handleDeleteNPC = async () => {
    await DmAPI.deleteNPC(npcID)
    return setDeleteNpcClick(true)
  }

  const handleBackClick = () => {
    setBackClick(true)
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
      <div className="body">
        <TableNavBar />
        <div className="parent-container">

          <div className="name-banner">
            <div className="back-button-banner">
              <div className="back-button" onClick={() => handleBackClick()}>
                BACK
        </div>
            </div>
            <div className="name-banner-l2">
              <div className="table-title">
                NPC
              </div>
              <div className="edit-delete-div">
                <div className="delete-button" >
                  <div onClick={() => { if (window.confirm('Are you sure you wish to delete this NPC?')) handleDeleteNPC() }}>
                    DELETE NPC
                    </div>
                </div>

              </div>
            </div>
          </div>
          <div className="card-container">
            <Card className="card-local" bg="primary" text="white" style={{ width: '18rem' }} className="text-center">
              <Card.Header className='card-header'>Featured</Card.Header>
              <Card.Body className="card-body">
                <Card.Title>{NPC.name}</Card.Title>
                <Card.Text className="card-text">
                  <div className="hp">
                    HP:  {NPC.hp}
                  </div>
                  <div className="ac">
                    AC:  {NPC.ac}
                  </div>
                  <br />
                  <div className="details">
                    <div className="details-title">
                      DESCRIPTION:
                  </div>
                    <br />
                    <div>
                      {NPC.details}
                    </div>
                  </div>
                </Card.Text>

              </Card.Body>
      
                <div className="button-container">
                  <div>
                    <Button onClick={() => handleEditButtonClick()} className='edit'>EDIT</Button>
                  </div>
                </div>
              
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default NPC_detail;
