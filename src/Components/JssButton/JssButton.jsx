import useStyles from './JssButton.styles'
import React from "react";

export default function JssButton() {
    const classes = useStyles();
    return (
        <button className={classes.button} > JssButton </button>
    );
}