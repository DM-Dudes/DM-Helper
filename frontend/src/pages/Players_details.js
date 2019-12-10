import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom"
import TableNavBar from '../components/NavBar/TableNavBar.js'
import PlayerEditPage from '../pages/Player_edit.js'
import DmAPI from '../Api/DmApi.js'
// import './Players_details.css'

const Player_details = (props) => {
  const { tableid } = props
  const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
  const [deletePlayerClick, setDeletePlayerClick] = useState(null)
  const [Player, setPlayer] = useState(0)
  const [editPlayerClick, setEditPlayerClick] = useState(null)
  let [backClick, setBackClick] = useState(null)
  const playerID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  const handleEditButtonClick = () => {
    setEditPlayerClick(true)
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#071132"
    DmAPI.fetchPlayerByID(playerID)
      .then((apiResponseJSON) => {
        setPlayer(apiResponseJSON)
      }
      )
  }, [playerID])

  const handleDeletePlayer = async () => {
    await DmAPI.deletePlayer(playerID)
    return setDeletePlayerClick(true)
  }

  const handleBackClick = () => {
    setBackClick(true)
  }

  if (deletePlayerClick === true) {
    return <Redirect to={`/table-detail/${tableid}`} />
  }

  if (editPlayerClick === true) {
    return (
      <div>
        <PlayerEditPage props={Player} editStatus={setEditPlayerClick} /> {/* change this */}
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
                PLAYER
              </div>
              <div className="edit-delete-div">
                <div className="delete-button" >
                  <div onClick={() => { if (window.confirm('Are you sure you wish to delete this Player?')) handleDeletePlayer() }}>
                    DELETE PLAYER
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
                <Card.Title className="card-title">NAME {Player.name}</Card.Title>
                <Card.Text className="card-text">
                  <div className="details">
                    <div className="details-title">
                      <h2>
                        DESCRIPTION:
                      </h2>
                    </div>
                    <div className="details-text">
                      {Player.details}
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button  className="edit" onClick={() => handleEditButtonClick()} ><span>EDIT</span></Button>
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
export default Player_details;
//   const [player, setPlayer] = useState(null)
//   const [backToTableDetailButton, setBackToTableDetailButton] = useState(null)
//   const [editPlayerClick, setEditPlayerClick] = useState(null)

//   const playerID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

//   useEffect(() => {
//     Api.fetchPlayerByID(playerID)
//       .then((apiResponseJSON) => {
//         setPlayer(apiResponseJSON)
//       }
//       )
//   }, [playerID])

//   const handleEditButtonClick = () => {
//     setEditPlayerClick(true)
//   }

//   if (editPlayerClick === true) {
//     return (
//       <div>
//         <PlayerEditPage props={player} editStatus={setEditPlayerClick} />    
//       </div>
//     )
//   }

//   const backToTableDetailonClickHandler = () => {
//     setBackToTableDetailButton(true)
//       return <Redirect to={`/table-detail/${player.dmtable}`} />
//   }
//   const handleDelete = async () => {
//     await Api.deletePlayer(playerID)
//     return setBackToTableDetailButton(true)
//   }
//   if (backToTableDetailButton === true) {
//     return <Redirect to={`/table-detail/${player.dmtable}`} />
//   }
//   if (player) {
//     return (
//       <div>
//         <TableNavBar />
//         <div>
//           Name = {player.name}
//           <br />
//           table = {player.dmtable}
//           <br />
//           details = {player.details}
//           <br />
//           <div>
//             <button onClick={() => handleEditButtonClick()}>
//               Edit Player
//             </button>
//           </div>
//           <div>
//             <button onClick={() => { if (window.confirm('Are you sure you wish to delete this Player?')) handleDelete() }}>Delete Player</button>
//           </div>
//         </div>
//         <br />
//         <div>
//           <button onClick={() => backToTableDetailonClickHandler()} name="back">Back to Table</button>
//         </div>
//       </div>

//     );
//   }
//   else {
//     return (
//       <div>loading player</div>
//     )
//   }
// }

// export default Player_details;