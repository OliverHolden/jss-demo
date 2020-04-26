import React from "react";
import useStyles from './NewStyledButton.styles'

export default function NewStyledButton() {
    const classes = useStyles();
    return (
        <>
            <button className={classes.button_blue}>
                Blue Button
            </button>
            <button className={classes.button_green}>
                Green Button
            </button>
        </>
    );
}
