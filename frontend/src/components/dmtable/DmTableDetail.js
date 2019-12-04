import React from 'react';
import NPC_list from '../NPC/NPC_list';


const DmTableDetail = (props) => {
  const { name, userdmtable, story, notes, dmtable_id } = props

  return (
    <div>
      <h1>
        {name}
      </h1>
      <p>
        {story}
      </p>
      <p>
        {notes}
      </p>
      <div>
        <NPC_list tableid={dmtable_id} />
      </div>
      <div>
        {/*<ListComponent PlayerList />*/}
      </div>
    </div>
  );
}

export default DmTableDetail