import { Router } from 'express'

const router = Router()
router.get('', (_req, res) =>
  res.json({
    message: 'Hello World',
    endPoints: [
      {
        url: '/tone/nat/maj',
        method: 'GET',
        description: 'Get a random tone'
      },
      {
        url: '/tone/nat/min',
        method: 'GET',
        description: 'Get a random tone'
      },
      {
        url: '/tone/nat',
        method: 'GET',
        description: 'Get a random tone'
      },
      {
        url: '/tone',
        method: 'GET',
        description: 'Get a random tone'
      }
    ]
  })
)

export default router
