import React from 'react';
import { withStyles } from '@material-ui/core';
import { Typography, Paper, Container } from '@material-ui/core';

const styles = theme => ({

    paper: {
        width:1200,
        borderRadius:100,
        height:500,
        margin:50,
        backgroundColor: 'green',
    
    }
})

class table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <Container>

            <Paper color='secondary' elevation={10} className={classes.paper}>
                <Typography align='center'>This is the table component</Typography>

            </Paper>
            </Container>

        )
    }
}

const Table = withStyles(styles)(table);

export default Table;