import logo from './logo.svg';

import WordLetterCounter from './WordLetterCounter.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="top">
        Mini Project 1
      </h1>
      <h1>
        Words and Letters
        Counters
      </h1> 
      <WordLetterCounter />  
    </div>
  );
}

export default App;
