import React, { useState, useEffect } from 'react'
import DmTableList from '../components/dmtable/DmTableList.js'
import DmApi from '../Api/DmApi.js'


const DMTableListPage = (props) => {
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    DmApi.fetchAllDM()
      .then((apiResponseJSON) => {
        for (let user of apiResponseJSON){
          if (user.name === props.userName && userId === null){
            setUserId(user.user_id)
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
      <DmTableList userId={userId}/>
    )
  }
}
export default DMTableListPage


