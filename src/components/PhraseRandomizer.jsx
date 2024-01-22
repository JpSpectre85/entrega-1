import React from 'react'

const PhraseRandomizer = ({quote}) => {
  return (
    <div className='phraseAuthor'>
        <p>{quote.phrase}</p>
        <p><strong>Fuente: </strong>{quote.author}</p>
    </div>
  )
}

export default PhraseRandomizer