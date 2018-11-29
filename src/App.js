import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Form className="form">
        <Form.Input label="First name" placeholder="First name" />
        <Form.Input label="Last name" placeholder="Last name" />
        <Form.Select label="Gender" />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button primary>Click here!</Form.Button>
      </Form>
    );
  }
}

export default App;
