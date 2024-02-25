import { Router } from 'express'
import { getAllNotes, getMod } from '../controllers/Harmony.controller'

const router = Router()
router.get('/notes', getAllNotes)
router.get('/mod/:lang?', getMod)
router.get('/modes/:lang?', getMod)

export default router
