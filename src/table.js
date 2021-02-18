import React from 'react';
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const styles = theme => ({

})

class table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <Typography>This is the table modification</Typography>

        )
    }
}

const Table = withStyles(styles)(table);

export default Table;