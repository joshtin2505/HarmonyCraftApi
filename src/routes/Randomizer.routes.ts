import { Router } from 'express'
import { toneRandomizer } from '../controllers/Randomizer.controller'

const router = Router()
router.get('/tone/:minoMaj?', toneRandomizer)
router.get('/tone/:altoNat?/:minoMaj?', toneRandomizer)

export default router
