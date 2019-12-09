import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Api from './Api/DmApi.js'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};

const LoginAndSignup = () => {
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
            <a1>Welcome To DM-Helper</a1>
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
            <Form onSubmit={backToLogin} method="GET" id='restart'>
              <Button type='submit' form='restart'>Back to Login</Button>
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
            <h1>Welcome To DM-Helper</h1>
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
  } 
  else {
    <Redirect to='/'/>
  }
}
export default LoginAndSignup;