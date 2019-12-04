import React from 'react';


const DmTableDetail = (props) => {
  const { name, userdmtable, story, notes } = props

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
        {/*<ListComponent NPCData />*/}
      </div>
      <div>
        {/*<ListComponent PlayerList />*/}
      </div>
    </div>
  );
}

export default DmTableDetail