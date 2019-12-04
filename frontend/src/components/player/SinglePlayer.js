import React, { useState, useEffect } from 'react';
import DmAPI from '../../Api/DmApi.js'
import { stat } from 'fs';
 
 const SinglePlayer = (_props) => {

  const [players, setPlayers] = useState(0)
  const [index, setIndex] = useState(0)
 
  const notsoFucked = async () => {
    let playerId = 2
    let stateArray = []
    let indexArray = []
    const playerSet = await DmAPI.fetchPlayers(playerId)
    console.log(playerSet)
      let counter = 0
      for(let player of playerSet){
        if(player.dmtable === playerId){
          indexArray.push(counter)
          stateArray.push(player.name)
          
          counter += 1;
        } else {
          counter += 1;
        }
      }
      if (players === 0){
        setPlayers(stateArray)
        setIndex(indexArray)
      }
      console.log(players)
      console.log(index)
    }
  useEffect(() => {
    notsoFucked()
  })
     return (
       <div>
         {players}
       </div>
     );
   }
 
 export default SinglePlayer;

//  const SinglePlayer = (_props) => {

//   const [players, setPlayers] = useState()
//   const [index, setIndex] = useState()
//   React.useEffect (() => {
//     let playerId = 2
//     let stateArray = []
//     let indexArray = []
//     DmAPI.fetchPlayers(playerId)
//     .then((apiResponseJSON) => {
//       console.log(apiResponseJSON)
//       let counter = 0
//       for(let player of apiResponseJSON){
//         if(player.dmtable === playerId){
//           indexArray.push(counter)
//           stateArray.push(player.name)
//           console.log(stateArray)
//           console.log(indexArray)
//           counter += 1;
//         } else {
//           counter += 1;
//         }
//       }
//       return stateArray, indexArray
      
//     })
//   }, [])
//   setPlayers(stateArray)
//   setIndex(indexArray)
//      return (
//        <div>
//          {players}
//        </div>
//      );
//    }
 
