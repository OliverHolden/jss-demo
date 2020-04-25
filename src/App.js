import React from 'react';
import './App.scss';
import NewStyledButton from './Components/NewStyledButton'

function App() {
  return (
      <div className="flex-container">
          <button className={"button-green"}>Green Button Me</button>
          <NewStyledButton>New e</NewStyledButton>
      </div>
  );
}

export default App;
