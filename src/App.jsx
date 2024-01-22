import { useState } from 'react'
import './App.css'
import phrases from "./utils/phrases.json"
import PhraseRandomizer from './components/PhraseRandomizer'
import randomIndex from './services/randomIndex.js'
import PhraseButton from './components/PhraseButton.jsx'
import bgArray from './utils/bgArray.json'

function App() {
  const phrase = randomIndex(phrases)
  const bgRandom = randomIndex(bgArray)

  const [quote, setQuote] = useState(phrase)
  const [bgApp, setBgApp] = useState(bgRandom)

  const bgStyles = {backgroundImage: `url('../assets/fondo${bgApp}.jpg')`}

  

  return (
    <div className='app' style={bgStyles}>
      <div className='container'>
        <h1>Galletas de la Fortuna</h1>
        <PhraseRandomizer quote={quote}/>
        <PhraseButton setQuote={setQuote} setBgApp={setBgApp}/>
      </div>
    </div>
  )
}

export default App
