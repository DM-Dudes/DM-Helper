import NPC_list from '../NPC/NPC_list';
import React, { Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";





const DmTableDetail = (props) => {
  const { name, userdmtable, story, notes, dmtable_id } = props

  addPlayerOnClickHandler = event => {
    
  }


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
        <Fragment>
          <MDBBtn onClick= color="default">
            Add NPC <MDBIcon icon="plus" className="ml-1" />
          </MDBBtn>
          <MDBBtn color="default">
            Add Player <MDBIcon icon="plus" className="ml-1" />
          </MDBBtn>
        </Fragment>
      </div>
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