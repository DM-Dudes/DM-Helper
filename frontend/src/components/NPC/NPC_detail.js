import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


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
  const [backClick, setBackClick] = useState(null)
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
        <NpcEditPage props={NPC} tableid={tableid} editStatus={setEditNpcClick} /> {/* change this */}
      </div>
    )
  }

  if (backClick) {
    return <Redirect to={"/table-detail/" + tableid} />
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
            <Card text="white" style={{ width: '30rem' }} className="card-local">
              <Card.Header className='card-header'>

              </Card.Header>
              <Card.Body className="card-body">
                <Card.Title className="card-title">NAME {NPC.name}</Card.Title>
                <Card.Text className="card-text">
                  <div className="hp">
                    <h3 className="details-title" font-weight="bold">
                      HP:
                    </h3>
                    <div className="hp-ac-text">{NPC.hp}</div>
                  </div>
                  <div className="ac">
                    <h3 className="details-title" font-weight="bold">
                      AC:
                    </h3>
                    <div className="ac-text">
                      {NPC.ac}
                    </div>
                  </div>
                  <br />
                  <div className="details">
                    <div className="details-title">
                      DESCRIPTION:
                  </div>
                    <br />
                    <div className="details-text">
                      {NPC.details}
                    </div>
                  </div>
                  <div className="button-container">
                    <div>
                      <Button onClick={() => handleEditButtonClick()} className='edit'>EDIT</Button>
                    </div>
                  </div>
                </Card.Text>

              </Card.Body>

            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default NPC_detail;
