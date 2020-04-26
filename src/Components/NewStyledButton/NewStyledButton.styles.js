import {createUseStyles} from 'react-jss';

export default createUseStyles({

    NewStyledButton__button: {
        width: 700,
        border: [5, 'solid', '#fff'],
        fontSize: 30,
        fontFamily: 'Calibri',
        color: '#fff',
    },

    button_blue: {
        extend: 'NewStyledButton__button',
        backgroundColor: '#2778b3',
    },

    button_green: {
        extend: 'NewStyledButton__button',
        backgroundColor: '#008000'
    }
});



