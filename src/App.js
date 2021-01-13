import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const users = 'http://localhost:3000/users'



export default class App extends React.Component {

  state = {
    users : []
  }

  componentDidMount() {
    fetch(users)
    .then(res => res.json())
    .then(users => this.setState({
      users : users
    }))
  }

  render () {
  return (
      <div>{console.log(this.state.users)}</div>
  );
}}

