import 'dotenv/config'
import express from 'express'
import logger from './logger'

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
  logger.info(`Server started at localhost:${process.env.PORT}`)
})

export default app
