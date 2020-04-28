import React from 'react';
import './App.scss';
import thomas from './Images/thomas.png'
import NewStyledButton from './Components/NewStyledButton/NewStyledButton'
import {Button} from "./Components/ReactInlineButton";

function App() {
  return (
      <>
          <div className="flex-container">
              <button className={"button-blue"}>Old Button</button>
              <NewStyledButton/>
              <Button/>
          </div>
          <img src={thomas} alt={"Thomas and friends"} width= "100%"/>
      </>
  );
}

export default App;
