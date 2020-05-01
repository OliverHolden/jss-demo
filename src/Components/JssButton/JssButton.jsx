import React from "react";
import useStyles from './JssButton.styles'

export default function JssButton() {
    const classes = useStyles();
    return (
        <button className={classes.button} >
            JssButton
        </button>
    );
}
