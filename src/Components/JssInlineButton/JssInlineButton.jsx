import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    button: {
        width: 450,
        height: 100,
        backgroundColor: '#2778b3',
        border: [5, 'solid', '#fff'],
        fontFamily: 'Times New Roman',
        fontSize: '3em',
        color: '#fff',
    },
});

export default function JssInlineButton() {
    const classes = useStyles();
    return (
        <button className={classes.button} >
            JssInlineButton
        </button>
    );
}
