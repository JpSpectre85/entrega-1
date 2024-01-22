import React from 'react'
import phrases from '../utils/phrases.json'
import randomIndex from '../services/randomIndex'
import bgArray from '../utils/bgArray.json'

const PhraseButton = ({setQuote , setBgApp}) => {
    const handleButton = () =>{
      const phrase = randomIndex(phrases)
      const bgRandom = randomIndex(bgArray)
        setQuote(phrase)
        setBgApp(bgRandom)
    }

  return (
    <button onClick={handleButton}>Ver Otro</button>
  )
}

export default PhraseButton