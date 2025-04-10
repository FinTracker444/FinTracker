import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()

// Add spending to category
router.post('/', async (req, res) => {
  const { spendingName, spendings, remaining, catId } = req.body
  try {
    const spending = await prisma.categorySpendings.create({
      data: { spendingName, spendings, remaining, catId },
    })
    res.json(spending)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
