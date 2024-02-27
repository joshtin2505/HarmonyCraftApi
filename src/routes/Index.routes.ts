import { Router } from 'express'

const router = Router()
router.get('', (_req, res) =>
  res.json({
    message: 'Hello World',
    endPoints: [
      {
        url: '/api/notes',
        method: 'GET',
        description: 'Get all notes'
      },
      {
        url: '/api/mod',
        method: 'GET',
        description: 'Get all mods'
      },
      {
        url: '/api/modes',
        method: 'GET',
        description: 'Get all modes'
      },
      {
        url: '/api/random/tone',
        params: ['nat - alt', 'min - maj'],
        method: 'GET',
        description: 'Get a random tone'
      }
    ]
  })
)

export default router
