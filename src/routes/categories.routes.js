import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()

// Create Category
router.post('/', async (req, res) => {
  const { CategoryName, SoftLimit, Month, Year, userId } = req.body
  try {
    const category = await prisma.categories.create({
      data: { CategoryName, SoftLimit, Month, Year, userId },
    })
    res.json(category)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
