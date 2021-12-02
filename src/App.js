import React, {useState} from 'react';

import './App.css';

function App() {

const [gifs, setGif] = useState(['']);

  return (
    <div className="App">
      <section className="App-header">
        {gifs}
      </section>
    </div>
  );
}

export default App;
