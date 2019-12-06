import React from 'react';

import NPCDetail from '../components/NPC/NPC_detail.js'

export const NPC_details_page = (props) => {

    return (
      <div>
        <h1>Welcome to the NPC detail page.</h1> 
        <div>
          <NPCDetail npcid={props.npcid}/>
        </div>
      </div>
    );
  }

export default NPC_details_page;