import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({

    button: {
        backgroundColor: '#2778b3',
        width: 250,
        border: [5, 'solid', '#fff'],
        fontSize: 30,
        fontFamily: 'Calibri',
        color: '#fff',
    },
});

export default function JssInlineButton() {
    const classes = useStyles();
    return (
        <button className={classes.button} > JssInlineButton </button>

    );
}
