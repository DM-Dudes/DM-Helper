import React, { useEffect, useState } from 'react';
import Api from './Api/UserAPI.js'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UserNav from './components/UserNav.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
  const [userName, setUserName] = useState(0)
  const [userPass, setUserPass] = useState(0)
  const [usersinfo, setUsersInfo] = useState(0)
  const [userid, setUserId] = useState(0)

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
  const profiles = async () => {
    const profileinfo = await Api.fetchAllAlumni()
    if (usersinfo === 0) {
      setUsersInfo(profileinfo)
    }
  }
  const userCheck = () => {
    if (!loggedIn) {
      for (let i = 0; i < usersinfo.length; i++) {
        if (usersinfo[i].user_name == userName && usersinfo[i].password == userPass) {
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


  if (!loggedIn) {
    return (
      <div className='loginform'>
        <Form onSubmit={profileSubmit} method="GET" id='test'>
          <FormGroup>
            <Label for="user_name" className="col-2 ml-3">Username</Label>
            <Input type="text" name="user_name" id="user_name" className="col-6 ml-3" placeholder="Sledge" />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="col-2 ml-3">Password</Label>
            <Input type="password" name="password" id="password" className="col-6 ml-3" placeholder="codeplatoon" />
          </FormGroup>
          <Button type='submit' className="col-6 ml-3" form='test' >Submit</Button>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <div>
            <div>
              <UserNav />
            </div>
            <Route exact path='/' render={(props) => <ProfilePage {...props} userid={userid} loggedIn={loggedIn} />} />
            </div>
        </Router>
      </div>
    );
  }
}
export default App;