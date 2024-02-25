import type { Request, Response } from 'express'
import type { Note } from '../../types/notesTypes.d.ts'
import { notes } from '../mocks/notes.json'

function toneRandomizer(req: Request, res: Response) {
  const randomTone: Note = notes[
    Math.floor(Math.random() * notes.length)
  ] as Note
  const { altoNat } = req.params
  if (altoNat === undefined) {
    return res.json({ tone: randomTone })
  } 
  // fix  this
  while (altoNat.toLocaleLowerCase() === 'alt'){
    const randomTone: Note = notes[
      Math.floor(Math.random() * notes.length)
    ] as Note
    return res.json({ tone: randomTone })
  }
    
  else if (altoNat.toLocaleLowerCase() === 'nat') {
    return res.json({ tone: randomTone })
  }
}

export { toneRandomizer }
