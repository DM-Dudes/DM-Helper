const url = "http://localhost:8000/"


// DMs/Users
const fetchAllDM = async () => {
  let users = await fetch(`http://localhost:8000/users/`)
<<<<<<< HEAD
    .then(res => res.json())
    .then(data => data)
=======
  .then(res => res.json())
  .then(data => data)
>>>>>>> 5b3a52da18abd0732ca459b8eb7562c5d4278ef7
  return users
}

const fetchNewUser = (newUserObject) => {
  return fetch('http://localhost:8000/users/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newUserObject)
  })
}

const fetchEditDM = async (userid, newUserObject) => {
<<<<<<< HEAD
  return fetch(`http://localhost:8000/users/${userid + 1}/`, {
=======
  return fetch(`http://localhost:8000/users/${userid+1}/`, {
>>>>>>> 5b3a52da18abd0732ca459b8eb7562c5d4278ef7
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(newUserObject)
  })
}

// DMT...ables
const fetchDMTables = () => {
  return fetch(url + "dm_tables")
  .then((response) => response.json())
}

const fetchDMTableByID = (DMTableID) => {
  return fetch(`${url}dm_tables/${DMTableID}`)
  .then(res => res.json())
  .then(data => data)
  .catch(err => {
    return err
  })
}

const deleteDMTable = (DMTable) => {
  return fetchDMTables(`${url}dm_tables/${DMTable}/`, {
    method: `delete`
  })
}

const addDMTable = (DMTableObject) => {
    return fetch(`${url}/dm_tables/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(DMTableObject)
    })
  }

  const updateDMTable = (DMTableID, data) => {
    return fetch(`${url}/dm_tables/${DMTableID}/`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
  }).catch(err => err);
  }

  // players
const fetchPlayers = () => {
  return fetch(url + "players")
  .then((response) => response.json())
}

const fetchPlayerByID = (playerID) => {
  return fetch(`${url}players/${playerID}`)
  .then(res => res.json())
  .then(data => data)
  .catch(err => {
    return err
  })
}

const deletePlayer = (player) => {
  return fetchPlayers(`${url}players/${player}/`, {
    method: `delete`
  })
}

const addPlayer = (playerObject) => {
    return fetch(`${url}/players/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(playerObject)
    })
  }

  const updatePlayer = (playerID, data) => {
    return fetch(`${url}/players/${playerID}/`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
  }).catch(err => err);
  }
  // const fetchPlayers = () => {
  //   return fetch(url + "players")
  //   .then((response) => response.json())
  // }
  // NPCs

  const fetchNPCs = () => {
    return fetch(url + "npcs/")
    .then((response) => response.json())
  }

  // const fetchNPCs = async (tableID) => {
  //   let users = await fetch(`http://localhost:8000/npcs/`)
  //   .then(res => res.json())
  //   .then(data => data)
  //   return users
  // }

  const fetchNPCByID = (npcID) => {
    return fetch(`${url}npcs/${npcID}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      return err
    })
  }
  
  const deleteNPC = (npc) => {
    return fetchNPCs(`${url}npcs/${npc}/`, {
      method: `delete`
    })
  }
  
  const addNPC = (npcObject) => {
      return fetch(`${url}/npcs/`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(npcObject)
      })
    }
  
    const updateNPC = (npcID, data) => {
      return fetch(`${url}/npcs/${npcID}/`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res;
    }).catch(err => err);
    }


export default {
  fetchAllDM: fetchAllDM,       /* Users */
  fetchEditDM: fetchEditDM,
  fetchNewUser: fetchNewUser,
  fetchDMTables: fetchDMTables, /* DM Tables */
  fetchDMTableByID: fetchDMTableByID,
  deleteDMTable: deleteDMTable,
  addDMTable: addDMTable,
  updateDMTable: updateDMTable,
  fetchPlayers: fetchPlayers,   /* Players */
  fetchPlayerByID: fetchPlayerByID,
  deletePlayer: deletePlayer,
  addPlayer: addPlayer,
  updatePlayer: updatePlayer,
  fetchNPCs: fetchNPCs,
  fetchNPCByID: fetchNPCByID,   /* NPCs */
  deleteNPC: deleteNPC,
  addNPC: addNPC,
  updateNPC: updateNPC,

}