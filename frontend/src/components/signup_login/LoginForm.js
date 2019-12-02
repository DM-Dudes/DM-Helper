import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Api from '../Api/UserAPI.js'


const Login = (props) => {
  const [usersinfo, setUsersInfo] = useState(0);
  const [userName, setUserName] = useState(0)
  const [userPass, setUserPass] = useState(0)
  console.log(props)
  const profileSubmit = (event) => {
    event.preventDefault()
    let user_name = event.target.user_name.value
    let password = event.target.password.value
    if (userName === 0 & userPass === 0) {
      setUserName(user_name)
      setUserPass(password)
    }
  }
  const profiles = async () => {
    const profileinfo = await Api.fetchAllAlumni()
    if (usersinfo === 0) {
      setUsersInfo(profileinfo)
    }
  }
  useEffect(() => {
    profiles()
  })
  for (let i = 0; i < usersinfo.length; i++) {
    if (usersinfo[i].user_name == userName && usersinfo[i].password == userPass) {
      return 
    } else {
      console.log('nope')
    }
  }
  console.log(userName)
  console.log(userPass)
  console.log(usersinfo)

  // props.usrCallback(user_name)
  // console.log(user_name, password)
  // window.localStorage.setItem('login', 'true')
  // this.props.history.push('/')


  return (
    <div>
      <Form onSubmit={profileSubmit} method="GET" id='test'>
        <FormGroup>
          <Label for="user_name" className="col-2 ml-3">Username</Label>
          <Input type="text" name="user_name" id="user_name" className="col-6 ml-3" placeholder="Dungeon Master Name" />
        </FormGroup>
        <FormGroup>
          <Label for="password" className="col-2 ml-3">Password</Label>
          <Input type="password" name="password" id="password" className="col-6 ml-3" placeholder="Chant of Passage" />
        </FormGroup>
        <Button type='submit' className="col-6 ml-3" form='test' >Submit</Button>
      </Form>
      <a style={{ margin: '20px' }} href='/'>Back</a>
    </div>
  );
}


export default Login;