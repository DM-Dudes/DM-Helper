import React, { useState, useEffect } from 'react'
import DmTableList from '../components/dmtable/DmTableList.js'
import DmApi from '../Api/DmApi.js'


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
      loading
      </div>
    )
  }else{
    return(
      <div>
        <button><a className="nav-link" href="/create-table">CREATE TABLE</a></button>
      <DmTableList userId={userId}/>
      </div>
    )
  }
}
export default DMTableListPage


