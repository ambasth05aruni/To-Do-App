
import './App.css';
import TodoWrap from './component/TodoWrap';
import NavBaar from './component/NavBaar';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('dark'); //whether dark mode is enabled or not

const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light');
  }
  else{
    setMode('dark')
  }
}

  return (
    <>
    <div>
      <NavBaar mode={mode} toggleMode={toggleMode}/>
    </div>
    
    <div className="App">
     <TodoWrap/>
    </div>
    </>
  );
}

export default App;
