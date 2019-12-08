
// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';

const CombatPage = (props) => {

  const [monsterArray, setMonsterArray] = useState([])
  const [Clicked, setClicked] = useState([])
  const [battleReady, setBattleReady] = useState(null)
  
    let monsterData = {
        unitsInBattle: [
            {
                name: 'goblin bruiser',
                hp: 9,
            },
            {
                name: 'goblin scrapper',
                hp: 4,
            },
            {
                name: 'Mogar',
            }
        ] 
    };

    const handleBattleButton = () => {
      setBattleReady(true)
    }

    useEffect(() => {
      console.log('called useEffect')
      let pushArray = []
      for (let monster of monsterData.unitsInBattle){
      pushArray.push(<button onClick={() => addToList(monster.name)}><div>{monster.name}</div></button>)
      }
      setMonsterArray(pushArray)
    }, [])

    const addToList = (monsterName) => {
      let number = Clicked
      number.push(<div>{monsterName}</div>)
      setClicked(<div>{number}</div>)
    }
  if (battleReady){
    return (<div>battle bots!</div>)
  }else{
  return(
    <div>
    <button onClick={handleBattleButton}>Fight with this setup</button>
    <div>{Clicked}</div>
    <div>{monsterArray}</div>
    </div>
  )}
}
export default CombatPage;
 
    // render() {
    //     return  (
    //     <React.Fragment>
    //         <div className="container-fluid">
    //             <div className="row justify-content-betweenw">
    //                 <div className="col">
    //                     <h1><span className="badge badge-secondary">{ this.state.total }</span></h1>
    //                 </div>
    //                 <div className="col">
    //                     <button onClick={ this.addToBattle } className="btn btn-success btn-sm">Add To Battle</button>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 {this.state.unitsInBattle.map(function(unit, index){
    //                 return <div key={index} className="col">
    //                             <div className="card" onClick={() => this.addToBattle(unit)}>
    //                                 <div className="card-body"> 
    //                                     {unit.name}
    //                                 </div>
    //                             </div>
    //                         </div>;})}
    //             </div>
    //             <div className="row">{this.clickedUnits}</div>
    //         </div>
    //     </React.Fragment> 
    //     );
    // }