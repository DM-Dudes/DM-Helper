import React, { useState, useEffect } from 'react'

import DmTableList from '../components/dmtable/DmTableList.js'


const DMTableListPage = (props) => {
  let { userid } = props


  return (
    <div>
      ive been reached
      <DmTableList userid={ userid } />
    </div>
  )
}


export default DMTableListPage


