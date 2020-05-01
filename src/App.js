import React from 'react';
import thomas from './Images/thomas.png'
import AnotherScSSButton from "./Components/AnotherScssButton/AnotherScssButton";
import './App.scss';
import ReactInlineButton from "./Components/ReactInlineButton/ReactInlineButton";
import JssInlineButton from './Components/JssInlineButton/JssInlineButton'
import JssButton from "./Components/JssButton/JssButton";

function App() {
  return (
      <>
          <div className="flex-container">
              <button className={"button"}>Old Button</button>
              <AnotherScSSButton />
              <ReactInlineButton />
              <JssInlineButton />
              <JssButton/>
          </div>
          <img src={thomas} alt={"Thomas and friends"} width= "100%"/>
      </>
  );
}

export default App;
