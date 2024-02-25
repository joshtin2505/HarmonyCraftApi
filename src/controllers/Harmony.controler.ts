import type { Request, Response } from 'express'
import notes from '../mocks/notes.json'
import mods from '../mocks/mod.json'
import modes from '../mocks/modes.json'

function getAllNotes(_req: Request, res: Response) {
  res.json(notes)
}

function getMod(req: Request, res: Response) {
  const { lang } = req.params
  if (lang === undefined) {
    return res.status(400).json({ message: 'Language is required. [es | en]' })
  } else if (lang !== 'en' && lang !== 'es') {
    return res
      .status(400)
      .json({ message: 'Language not supported. [es | en]' })
  } else if (lang === 'en') {
    return res.json({ mods: mods.emotions })
  }
  return res.json({ emociones: mods.emociones })
}

function getMode(req: Request, res: Response) {
  const { lang } = req.params
  if (lang === undefined) {
    return res.status(400).json({ message: 'Language is required. [es | en]' })
  } else if (lang !== 'en' && lang !== 'es') {
    return res
      .status(400)
      .json({ message: 'Language not supported. [es | en]' })
  } else if (lang === 'en') {
    return res.json({ modes: modes.modes_en })
  }
  return res.json({ modos: modes.modes_es })
}

export { getAllNotes, getMod, getMode }
