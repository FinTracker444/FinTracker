import express from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()
const prisma = new PrismaClient()

// Create User
router.post('/', async (req, res) => {
  const { userName, email, password } = req.body
  try {
    const user = await prisma.uSER.create({
      data: { userName, email, password },
    })
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get All Users
router.get('/', async (req, res) => {
  const users = await prisma.uSER.findMany()
  res.json(users)
})

export default router
