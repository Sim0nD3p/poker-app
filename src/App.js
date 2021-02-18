import React from 'react';
import { withStyles } from '@material-ui/core';
import { Card, Paper, Typography } from '@material-ui/core';
import Table from './table';


class App extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <Table></Table>
    )
  }
}
export default App