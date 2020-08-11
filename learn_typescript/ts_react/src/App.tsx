import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import useURLLoader from './hooks/useURLLoader'
function App() {
  const [show,setShow] = useState(true)
  const [data,loading] = useURLLoader('https://dog.ceo/api/breeds/image/random',[show])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{setShow(!show)}}>click to reloading</button>
        {loading ? <p>dog image loading</p>:<img src={data&& data.message}/>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
