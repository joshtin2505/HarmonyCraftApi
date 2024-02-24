import express from "express"

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001

app.get("/", (_req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
