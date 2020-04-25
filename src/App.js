import React from 'react';
import './App.scss';
import thomas from './Images/thomas.png'
import NewStyledButton from './Components/NewStyledButton'

function App() {
  return (
      <>
          <div className="flex-container">
              <button className={"button"}>Old Button</button>
              <NewStyledButton></NewStyledButton>
          </div>
          <img src={thomas} alt={"Thomas and friends"}/>
      </>
  );
}

export default App;
