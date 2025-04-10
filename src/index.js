import express from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import userRoutes from './routes/user.routes.js'
import monthlyRoutes from './routes/monthly.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import spendingsRoutes from './routes/spendings.routes.js'

dotenv.config()

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

// Routes
app.use('/api/users', userRoutes)
app.use('/api/monthly', monthlyRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/spendings', spendingsRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
