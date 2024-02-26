import type { Request, Response } from 'express'
import { toneRandomizer } from '../logic/Randomizer'

function getToneRandomizer(req: Request, res: Response) {
  const { altoNat, minoMaj } = req.params

  const randomTone = toneRandomizer({ altoNat, minoMaj })
  return res.json({ tone: randomTone })
}

export { getToneRandomizer }
