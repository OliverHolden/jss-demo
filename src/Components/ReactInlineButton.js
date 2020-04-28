import React from 'react'

export const Button = () => {
    const buttonGreen = {
        backgroundColor: "green",
        border: "2px solid white",
        borderRadius: "2rem",
        color: "white",
    };

    return(
        <button style={buttonGreen}>
            I think I'm green
        </button>
    )
}