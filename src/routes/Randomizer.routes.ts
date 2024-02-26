import { Router } from 'express'
import { getToneRandomizer } from '../controllers/Randomizer.controller'

const router = Router()
router.get('/tone/:altoNat?/:minoMaj?', getToneRandomizer)

export default router
