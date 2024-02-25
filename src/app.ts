import express from 'express'
import noteRoutes from './routes/Harmony.routes'
import RandomizerRoutes from './routes/Randomizer.routes'

const app = express()

app.use(express.json())
app.use('/api/random', RandomizerRoutes)
app.use('/api', noteRoutes)

export default app
