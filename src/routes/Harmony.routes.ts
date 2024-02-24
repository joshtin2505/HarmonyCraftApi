import { Router } from 'express'
import { getAllNotes, getMod } from '../controllers/Harmony.controler'

const router = Router()
router.get('/notes', getAllNotes)
router.get('/mod/:lang?', getMod)
export default router
