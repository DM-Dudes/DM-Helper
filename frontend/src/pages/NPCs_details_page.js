import React from 'react';
import { Redirect } from "react-router-dom"

import NPCDetail from '../components/NPC/NPC_detail.js'

export const NPC_details_page = (props) => {

  return (
    <div>
      <div>
        <NPCDetail npcid={props.npcid} />
      </div>
    </div>
  );
}

export default NPC_details_page;