import React from 'react';
import './App.scss';
import thomas from './Images/thomas.png'
import JssInlineButton from './Components/JssInlineButton/JssInlineButton'
import ReactInlineButton from "./Components/ReactInlineButton/ReactInlineButton";
import AnotherScSSButton from "./Components/AnotherScssButton/AnotherScssButton";
import JssButton from "./Components/JssButton/JssButton";

function App() {
  return (
      <>
          <div className="flex-container">
              <button className={"button"}>Old Button</button>
              <AnotherScSSButton />
              <ReactInlineButton />
              <JssInlineButton />
              <JssButton></JssButton>
          </div>
          <img src={thomas} alt={"Thomas and friends"} width= "100%"/>
      </>
  );
}

export default App;
