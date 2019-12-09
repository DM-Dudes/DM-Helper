import React, { useEffect, useState } from 'react';
import Api from './Api/DmApi.js'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import { Redirect } from "react-router-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DMTableCreatePage from './pages/DMTable_create.js';
import DMTableDetailsPage from './pages/DMTable_details.js'
import NPCDetailsPage from './pages/NPCs_details_page.js'
import PlayersCreate from './pages/Players_create'
import NPCsCreatePage from './pages/NPCs_create_page.js'
import DMTableListPage from './pages/DMTable_list.js'
import DMTableEditPage from './pages/DMTable_edit.js'
import Playersdetails from './pages/Players_details.js'

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);
  return [value, setValue];
};
const TableID = sessionStorage.getItem("currentTable_id")
const UserID = sessionStorage.getItem("currentUser_id")
const App = () => {
  const [loggedIn, setLoggedIn] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
  const [localName, setLocalName] =useStateWithLocalStorage(
    'myUserInLocalStorage'
  );
  const [signup, setSignUp] = useState(0)
  const [userName, setUserName] = useState(0)
  const [userPass, setUserPass] = useState(0)
  const [usersinfo, setUsersInfo] = useState(0)
  const [post, setPost] = useState(false)

  const profileSubmit = async (event) => {
    event.preventDefault()
    let user_name = event.target.user_name.value
    let password = event.target.password.value
    if (userPass === 0) {
      setUserPass(password)
    }
    if (userName === 0) {
      setUserName(user_name)
      setLocalName(user_name)
    }

  }
  const setSignUpForm = async () => {
    setSignUp(true)
  }
  const backToLogin = async () => {
    setSignUp(false)
  }
  const newUserSubmit = async (event) => {
    event.preventDefault()
    if (event.target.user_name.value.length > 0 && event.target.password.value.length > 0) {
      let name = event.target.user_name.value
      let password = event.target.password.value
      if (userName === 0) {
        setUserName(name)
        setLocalName(name)
      }
      if (userPass === 0) {
        setUserPass(password)
      }
      if (!post) {
        let newUserObject = {
          name: name,
          password: password,
        }
        setLoggedIn(true)
        await Api.fetchNewUser(newUserObject)
          .then((_response) => { setPost({ post: true }) })
      }
    }
    
  }

  
  const profiles = async () => {
    const profileinfo = await Api.fetchAllDM()
    if (usersinfo === 0) {
      setUsersInfo(profileinfo)
    }
  }

  const userCheck = () => {
    if (!loggedIn) {
      for (let i = 0; i < usersinfo.length; i++) {
        if (usersinfo[i].name === userName && usersinfo[i].password === userPass) {
          setLoggedIn(true)
        }
        
      }
      return (
        <Redirect to="/" />
      )
    }
  }
  useEffect(() => {
    profiles()
  })
  useEffect(() => {
    userCheck()
  })
  
  
  if (signup) {
    return (
      <div style={{ height: 1000, width: "100%", background: '#282c34' }}>
      <Snowfall />
        <Router>
          <div className='signupform'>
            <h1>Welcome To</h1>
            <h1>DM-Helper</h1>
            <Form onSubmit={newUserSubmit} method="GET" id='test'>
              <FormGroup>
                <Label for="user_name" className="col-2 ml-3">Username</Label>
                <Input type="text" name="user_name" id="user_name" className="input" placeholder="Dungeon Master" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="col-2 ml-3">Password</Label>
                <Input type="password" name="password" id="password" className="input" placeholder="Word of Power" />
              </FormGroup>
              <Button type='submit' className="button" form='test'><span>Register</span></Button><Button className="button" type='submit' form='restart'><span>Login</span></Button>
            </Form>
            <Form onSubmit={backToLogin} method="GET" id='restart'>
              
            </Form>
          </div>
        </Router>
      </div>
    )
  }
  if (!loggedIn) {
    return (
      <div style={{ height: 1000, width: "100%", background: '#282c34' }}>
    <Snowfall />
        <Router>
          <div className='loginform'>
            <h1>Welcome To</h1>
            <h1>DM-Helper</h1>
            <Form onSubmit={profileSubmit} method="GET" id='test'>
              <FormGroup>
                <Label for="user_name" className="col-2 ml-3">Username</Label>
                <Input type="text" name="user_name" id="user_name" className="input" placeholder="Dungeon Master" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="col-2 ml-3">Password</Label>
                <Input type="password" name="password" id="password" className="input" placeholder="Word of Power" />
              </FormGroup>
              <Button type='submit' className="button" form='test'><span>Login</span></Button> <Button className="button" onClick={setSignUpForm}><span>Sign Up</span></Button>
            </Form>
          <div>
           
          </div>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div className='background-blue'>
        <Router>
          <div>
            <div>
            <Route exact path="/" component={() => <DMTableListPage userName={localName} />} />
            </div>
            <Route exact path="/create-table" component={() => <DMTableCreatePage userid={UserID}/>} />
            <Route exact path="/table-detail/:tableid" component={() => <DMTableDetailsPage tableid={TableID}/>} />
            <Route exact path="/Players-details/:playerid" component={() => <Playersdetails/>} />
            <Route exact path="/NPC-detail/:npcid" component={() => <NPCDetailsPage />} />
            <Route exact path="/create-npc" component={() => <NPCsCreatePage tableid={TableID} />} />
            <Route exact path="/edit-table/:userid" component={() => <DMTableEditPage userid={UserID} />} />
            <Route exact path="/create-player" component={() => <PlayersCreate tableid={TableID} />} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;