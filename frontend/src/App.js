import React, { useEffect, useState } from 'react';
import Api from './Api/DmApi.js'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppNav from './components/NavBar/NavBar.js';
import NPC_list from './components/NPC/NPC_list.js'
import NPC_detail from './components/NPC/NPC_detail.js'
import PlayerListTable from './components/player/PlayerListTable.js'
import PlayerPage from './pages/Players_details.js'
import renderDMTableCreatePage from './pages/DMTable_create.js'
import DMTableCreatePage from './pages/DMTable_create.js';
import DMTableDetailsPage from './pages/DMTable_details.js'


const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};

const App = () => {
  const [loggedIn, setLoggedIn] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
  const [signup, setSignUp] = useState(0)
  const [userName, setUserName] = useState(0)
  const [userPass, setUserPass] = useState(0)
  const [usersinfo, setUsersInfo] = useState(0)
  const [userid, setUserId] = useState(0)
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
    }
  }
  const setSignUpForm = async () => {
    setSignUp(true)
  }
  const newUserSubmit = async (event) => {
    event.preventDefault()
    let name = event.target.user_name.value
    let password = event.target.password.value
    if (userPass === 0) {
      setUserPass(password)
    }
    if (userName === 0) {
      setUserName(name)
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
      
      
      window.location.reload()
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
          setUserId(i)
          setLoggedIn(true)
        } else {
          console.log('nope')
        }
      }
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
      <div>
        <Router>
          <div>
            <AppNav />
          </div>
          <div className='signupform'>
            <Form onSubmit={newUserSubmit} method="GET" id='test'>
              <FormGroup>
                <Label for="user_name" className="col-2 ml-3">Username</Label>
                <Input type="text" name="user_name" id="user_name" className="col-6 ml-3" placeholder="Dungeon Master" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="col-2 ml-3">Password</Label>
                <Input type="password" name="password" id="password" className="col-6 ml-3" placeholder="Word of Power" />
              </FormGroup>
              <Button type='submit' className="col-6 ml-3" form='test'>Register</Button>
            </Form>
          </div>
        </Router>
      </div>
        
    )
  }
  if (!loggedIn) {
    return (
      <div>
        <Router>
          <div>
            <AppNav />
          </div>
          <div className='loginform'>
            <Form onSubmit={profileSubmit} method="GET" id='test'>
              <FormGroup>
                <Label for="user_name" className="col-2 ml-3">Username</Label>
                <Input type="text" name="user_name" id="user_name" className="col-6 ml-3" placeholder="Dungeon Master" />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="col-2 ml-3">Password</Label>
                <Input type="password" name="password" id="password" className="col-6 ml-3" placeholder="Word of Power" />
              </FormGroup>
              <Button type='submit' className="col-6 ml-3" form='test'>Login</Button>
            </Form>
          </div>
          <div>
            <Button onClick={setSignUpForm}>Sign Up</Button>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <div>
          <AppNav/>
          <NPC_list/>
          <NPC_detail/>
          <PlayerListTable/>
          <PlayerPage/>
          <div>
          <Route exact path="/create-table" component={() => <DMTableCreatePage userName={ userName }/>}/>
          <Route exact path="/table-detail/:tableid" component={() => <DMTableDetailsPage tableid='1'/>}/>
          </div>
            {/* <Route exact path="/create-player" component={CreatePlayer} /> */}
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
