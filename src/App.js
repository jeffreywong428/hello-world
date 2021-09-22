import React, { useState } from 'react';
import ProgressDIY from './ProgressDIY'
import Cheer from './Cheer';

const App = () => {
  const [value, setValue] = useState(10);
  const [score, setScore] = useState(10);

  return (
    <div id="App">
      <ProgressDIY value={value} onClick={(e) => { setValue(e.target.value) }} />
      <Cheer value={score} onClick={(e) => { setScore(e.target.value)}}></Cheer>
    </div>
  );
}

export default App;