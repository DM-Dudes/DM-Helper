import React from 'react';
import PlayerView from './Playerview.js';


function PlayerListMap (props) {
<<<<<<< HEAD
  console.log("props ",props.player) 
  const mapObject = () => {
    let players = props.player
    Map.players = () => {
      console.log('yo')
    return <PlayerView
      name={props.name}
      details={props.details}
      table_id={props.dmtable}
    />
    }
  }

  // for (let player of props){
  //   console.log(player)
  // }

  if (props) {
    return (
      <div>
        {() => mapObject}
      
=======
    
  // const mapObject = (props, id) => {
  //   return <PlayerView
  //     id = {id}
  //     name={props.name}
  //     details={props.details}
  //     table_id={props.dmtable}
  //   />
  //   }
  
  if (props) {
    return (
      <div>
        {/* {mapObject()} */}
>>>>>>> 79d0e4b6609c0351a50b3f54d121667c27038057
      </div>
    )
    } else {
      return <div>No Players</div>
    }
  }


export default PlayerListMap;
