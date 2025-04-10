import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()

// Add Monthly entry
router.post('/', async (req, res) => {
  const { Month, Year, userId, Salary } = req.body
  try {
    const monthly = await prisma.monthly.create({
      data: { Month, Year, userId, Salary },
    })
    res.json(monthly)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
