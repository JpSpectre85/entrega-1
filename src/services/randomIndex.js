const randomIndex = (phraseArray) => {
    const phraseNumber = Math.floor(Math.random()*phraseArray.length)
    return phraseArray[phraseNumber]
}

export default randomIndex