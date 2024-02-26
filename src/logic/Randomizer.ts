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
  if (altoNatToLowerCase === 'nat' && minoMajToLowerCase === undefined) {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    while (randomTone.includes('#') || randomTone.includes('♭')) {
      randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    }
  } else if (altoNatToLowerCase === 'alt' && minoMajToLowerCase === undefined) {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    while (!randomTone.includes('#') || !randomTone.includes('♭')) {
      randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    }
  } else if (altoNatToLowerCase === undefined && minoMajToLowerCase === 'maj') {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
  } else if (altoNatToLowerCase === undefined && minoMajToLowerCase === 'min') {
    randomTone = (notes[Math.floor(Math.random() * notes.length)] as Note) + 'm'
  } else if (altoNatToLowerCase === 'alt' && minoMajToLowerCase === 'min') {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    while (!randomTone.includes('#') || !randomTone.includes('♭')) {
      randomTone =
        (notes[Math.floor(Math.random() * notes.length)] as Note) + 'm'
    }
  } else if (altoNatToLowerCase === 'nat' && minoMajToLowerCase === 'min') {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
    while (randomTone.includes('#') || randomTone.includes('♭')) {
      randomTone =
        (notes[Math.floor(Math.random() * notes.length)] as Note) + 'm'
    }
  } else {
    randomTone = notes[Math.floor(Math.random() * notes.length)] as Note
  }
  return { tone: randomTone }
}

export { toneRandomizer }
