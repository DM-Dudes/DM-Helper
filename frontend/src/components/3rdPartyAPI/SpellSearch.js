import React, { useState } from 'react';
import DmApi from '../../Api/DmApi.js'

export const SpellSearch = () => {

  const [fetched, setFetched] = useState(null)
  const [toolOpen, setToolOpen] = useState('closed')

  const proxyUrl = "https://salty-refuge-50932.herokuapp.com/"
  const url = "https://salty-refuge-50932.herokuapp.com/http://dnd5eapi.co/api/"
  const urlSpells = "spells/"
  const fetchAllSpells = () => {
    return fetch(url + urlSpells)
    .then((response) => response.json())
  }
  const returnSpellObject = (spellObject) => {
    let returnArray = []
      returnArray.push(
      <div key="1">
        <h2 key="2">{spellObject.name}</h2>
        <br></br>
         <h4 key='3'>Description</h4>
        <div key='4'>{spellObject.desc[0]}</div>
        <br></br>
         <h4 key='5'>Higher Level</h4>
        <div key='6'>{spellObject.higher_level && spellObject.higher_level[0]}</div>
        <br></br>
         <h4 key='7'>Range</h4>
        <div key='8'>{spellObject.range}</div>
        <br></br>
         <h4 key='9'>Components</h4>
        <div key='10'>{spellObject.components && spellObject.components}</div>
        <br></br>
         <h4 key='11'>Material</h4>
        <div key='12'>{spellObject.material && spellObject.material}</div>
        <br></br>
         <h4 key='13'>Ritual</h4>
        <div key='14'>{spellObject.ritual && spellObject.ritual}</div>
        <br></br>
         <h4 key='15'>Duration</h4>
        <div key='16'>{spellObject.duration}</div>
        <br></br>
         <h4 key='17'>Concentration</h4>
        <div key='18'>{spellObject.concentration}</div>
        <br></br>
         <h4 key='19'>Casting Time</h4>
        <div key='20'>{spellObject.casting_time}</div>
        <br></br>
         <h4 key='21'>Material</h4>
        <div key='22'>{spellObject.material && spellObject.material}</div>
        <br></br>
         <h4 key='23'>Components</h4>
        <br></br>
      </div>
      )
      setFetched(returnArray)
  }
  const handleSpellClick = async (spell) => {
    let spellLink = spell.spell.url
    return fetch(proxyUrl + spellLink + "/")
    .then((response) => response.json())
    .then((apiResponseJSON) => {
      returnSpellObject(apiResponseJSON)
    })
  }

  const handleSubmit = (input) => {
    input = input.toUpperCase()
    let spellArray = []
    fetchAllSpells()
    .then((apiResponseJSON) => {
      for (let spell of apiResponseJSON.results){
        let spellName = (spell.name).toUpperCase()
        if(spellName.includes(input)){
        spellArray.push(
          <div key={spell.name}>
            <button onClick={() => handleSpellClick({spell})}>
              <div>{spell.name}</div>
            </button>
          </div>
        )}
      }
      setFetched(spellArray)
    })
  }
  const handleSearch = async (event) => {
    event.preventDefault()
    handleSubmit(event.target.searchField.value)
  }
  const handleSearchTool = () => {
    if (toolOpen === "closed"){
      setToolOpen("open")
    } else {
      setToolOpen("closed")
    } 
  }

  if (toolOpen === "closed"){
    return (
      <div>
        <button onClick={handleSearchTool}>
          <div>
            Open Spell Search Tool
          </div>
        </button>
      </div>
    )
  }
return(

  <div>
    <div>
      <button onClick={handleSearchTool}>
        <div>
          Close Spell Search Tool
        </div>
      </button>
    </div>
    <form onSubmit={handleSearch}>
      <h2>Search Database</h2>
      <input type="text" name="searchField" placeholder="Find a spell"></input>
      <button type="submit" name="submit">Search</button> 
    </form>
    <div>
      {fetched}
    </div>
  </div>
)

}

export default SpellSearch;