const fetchAllDM = async () => {
  let users = await fetch(`http://localhost:8000/user/`)
  .then(res => res.json())
  .then(data => data)
  return users
}
const fetchNewUser = (newUserObject) => {
  return fetch('http://localhost:8000/user/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newUserObject)
  })
}
const fetchEditDM = async (userid, newUserObject) => {
  return fetch(`http://localhost:8000/user/${userid+1}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'EDIT',
    body: JSON.stringify(newUserObject)
  })
}
export default {
  fetchAllDM: fetchAllDM,
  fetchEditDM: fetchEditDM,
  fetchNewUser: fetchNewUser,

}