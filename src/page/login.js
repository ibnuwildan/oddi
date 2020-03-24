import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LoginPage extends Component {
  

  
render(){
    return (
      <Form>
          <Label for="exampleEmail">Login</Label>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password"
          />
        </FormGroup>
        {/* <FormGroup check> */}
        {/* <Label check> */}
          <Input type="button" name="submit" value="Submit" onClick={this.onBtnLogIn}/>
        {/* </Label> */}
      {/* </FormGroup> */}
      </Form>
    );
  }
  }
  
  export default LoginPage ;