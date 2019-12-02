const url = "https://localhost:8000/"


// DMs/Users
const fetchAllDM = async () => {
  let users = await fetch(`http://localhost:8000/users/`)
    .then(res => res.json())
    .then(data => data)
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
  return fetch(`http://localhost:8000/users/${userid + 1}/`, {
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

const fetchDMTableByID = (DMTableId) => {
  return fetch(`${url}dm_tables/${DMTableId}`)
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
  return fetch(`${url}players/${playerId}`)
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

  // NPCs

  


export default {
  fetchAllDM: fetchAllDM,
  fetchEditDM: fetchEditDM,
  fetchNewUser: fetchNewUser,
  fetchDMTables: fetchDMTables,
  fetchDMTableByID: fetchDMTableByID,
  deleteDMTable: deleteDMTable,
  addDMTable: addDMTable,
  updateDMTable: updateDMTable,
  fetchPlayers: fetchPlayers,
  fetchPlayerByID: fetchPlayerByID,
  deletePlayer: deletePlayer,
  addPlayer: addPlayer,
  updatePlayer: updatePlayer,
}