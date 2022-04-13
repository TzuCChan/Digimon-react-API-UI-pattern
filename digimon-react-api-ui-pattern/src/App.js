import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Title from './Title.jsx';
import Home from './Home.jsx';
import './App.css';

function App() {
  const [digimons, setDigimons] = useState([])
  
  const getDigimon = async () => {
    let results = await axios("https://digimon-cyber-sleuth-api-nak.herokuapp.com/digi/digimon")
    // setDigitalIds(results.data.images)
    setDigimons(results.data)
  }

  useEffect(() => {
    getDigimon()
  }, [])


  return (
    <div className="App">
      <Title />
      <div>
        <Routes>
          <Route path="/" element={<Home digimons={digimons} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;












//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App
