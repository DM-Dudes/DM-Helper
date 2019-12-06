import React, { useState, useEffect } from 'react'

import DmTableList from '../components/dmtable/DmTableList.js'
import DmApi from '../Api/DmApi.js'
import NavBar from '../components/NavBar/NavBar'


const DMTableListPage = (props) => {
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    DmApi.fetchAllDM()
    .then((apiResponseJSON) => {
      for (let user of apiResponseJSON){
        if (user.name === props.userName){
          setUserId(user.user_id)
          sessionStorage.setItem("currentUser_id", JSON.stringify(user.user_id))
          break;
        }
      }
    })
  }, [props])


 if(!userId){
    return (
      <div>
      <NavBar/>
      loading
      </div>
    )
  }else{
    return(
      <div>
        <NavBar/>
        <br></br>
        <DmTableList userId={userId}/>
      </div>
    )
  }
}
export default DMTableListPage


