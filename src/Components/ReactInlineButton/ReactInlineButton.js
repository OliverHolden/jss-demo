import React from 'react'

export default function ReactInlineButton() {
    const button = {
        width: 250,
        height: 100,
        backgroundColor: '#00A206',
        border: '2px dashed white',
        borderRadius: '50px',
        fontFamily: 'Calibri',
        fontSize: '1.8em',
        color: "white",
    };

    return(
        <button style={button} > ReactInlineButton </button>
    )
}
