import React from 'react';


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
=======
  // console.log("props ",props.player) 
  // const mapObject = () => {
  //   let players = props.player
  //   Map.players = () => {
  //     console.log('yo')
  //   return <PlayerView
  //     name={props.name}
  //     details={props.details}
  //     table_id={props.dmtable}
  //   />
  //   }
  // }
>>>>>>> 6d3ff18e86c6cebbd4cee900880e2800412d48c7

  // for (let player of props){
  //   console.log(player)
  // }

  if (props) {
    return (
      <div>
<<<<<<< HEAD
        {() => mapObject}
=======
        {/* {() => mapObject} */}
>>>>>>> 6d3ff18e86c6cebbd4cee900880e2800412d48c7
      
      </div>
    )
    } else {
      return <div>No Players</div>
    }
  }


export default PlayerListMap;
