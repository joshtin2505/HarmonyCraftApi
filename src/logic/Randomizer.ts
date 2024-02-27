import type { Note } from '../../types/notesTypes'
import { notes } from '../mocks/notes.json'

function toneRandomizer({
  altoNat,
  minoMaj
}: {
  altoNat?: string
  minoMaj?: string
}) {
  let randomTone: Note
  const altoNatToLowerCase = altoNat?.toLowerCase()
  const minoMajToLowerCase = minoMaj?.toLowerCase()
  if (altoNatToLowerCase === 'nat') {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    while (randomTone.includes('#') || randomTone.includes('♭')) {
      randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    }
    if (minoMajToLowerCase === 'min') {
      randomTone += 'm'
    }
  } else if (altoNatToLowerCase === 'alt') {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    while (!randomTone.includes('#') && !randomTone.includes('♭')) {
      randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
      console.log('randomTone', randomTone)
    }
    if (minoMajToLowerCase === 'min') {
      randomTone += 'm'
    }
  } else {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    if (minoMajToLowerCase === 'min') {
      randomTone += 'm'
    }
  }
  return { tone: randomTone }
}

export { toneRandomizer }
