import { useState, useEffect } from 'react';
import './App.css';
import DisplayGif from './components/DisplayGif'
import Button from './components/Button'

function App() {
  const [giphyData, setGiphyData] = useState({});

  const makeApiCall = async () => {
    const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=z39m2fHGZDVYDROVrHuy82c4q8sBDERn&tag=&rating=g';
   
    const res = await fetch(giphyUrl);
    const json = await res.json();

    setGiphyData(json)
  }

  useEffect(() => {
    makeApiCall()
  }, [])



  return (
    <div className="App">
      <DisplayGif giphy={giphyData}/>
    </div>
  );
}

export default App;
