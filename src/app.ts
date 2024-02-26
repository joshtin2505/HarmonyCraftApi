import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import noteRoutes from './routes/Harmony.routes'
import RandomizerRoutes from './routes/Randomizer.routes'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/random', RandomizerRoutes)
app.use('/api', noteRoutes)

export default app
