import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
config()
import express from 'express'

const app = express()
app.use(express.json())
const port = process.env.PORT || 4000

const prisma = new PrismaClient()

app.get('/', async (req, res) => {
	const users = await prisma.user.findMany()
	res.send(users)
})

app.listen(port, async () => {
	console.log(`[server]: Server is running at https://localhost:${port}`)
})
