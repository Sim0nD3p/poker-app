import React from 'react';
import socketClient from 'socket.io-client';
import { withStyles } from '@material-ui/core';
import { Card, Paper, Typography } from '@material-ui/core';
import Table from './table';

console.log('app.js');
const SERVER = 'http://192.168.0.37:8080';


function App(){
  var socket = io(SERVER);
    socket.on('connection', () => {
      console.log('connected with back-end');
    })
  return (
    <Table></Table>
  )

}

/* class App extends React.Component{
  constructor(props){
    super(props);
    this.socket = socketClient(SERVER);
    this.socket.on('connection', () => {
      console.log('connected with back-end');
    })

  }

  render(){
    return (
      <Table></Table>
    )
  }
} */
export default App