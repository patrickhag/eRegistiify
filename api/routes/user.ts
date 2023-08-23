import { PrismaClient } from "@prisma/client"
import { Request, Response, Router } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = Router()
const prisma = new PrismaClient()
const JWT_SECRECY = process.env.JWT_SECRECY || "default_secret_key"

// REGISTERING USER
router.post("/", async (req: Request, res: Response) => {
  const { names, contactInfo, email, nationalId, address, password } = req.body

  const oldUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (oldUser) {
    return res.status(409).json({ msg: "User Already Exist. Please Login" })
  }

  const hashedPassword = bcrypt.hashSync(password, 10)
  try {
    const user = await prisma.user.create({
      data: {
        names,
        contactInfo,
        email,
        nationalId,
        address,
        password: hashedPassword,
      },
    })
    res.json({ status: "ok", user })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

// LOGGING IN
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const user = await prisma.user.findFirst({ where: { email: email } })
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" })
    }
    const comparedPassword = bcrypt.compareSync(password, user?.password)
    if (!comparedPassword) {
      return res.status(400).json({ msg: "Invalid credentials" })
    }
    const token = jwt.sign({ email, id: user.id }, JWT_SECRECY)
    res.status(400).json({ msg: "ok", token, id: user.id })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: "Internal server error" })
  }
})

router.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok")
})

// updating user
router.patch("/", async (req: Request, res: Response) => {
  const id: string = req.query.id as string
  const { names, contactInfo, email, nationalId, address } = req.body
  try {
    if (!id) {
      return res.status(400).json({ error: "User ID is required" })
    }
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        names,
        contactInfo,
        email,
        nationalId,
        address,
      },
    })
    res.json({ status: "ok", user })
  } catch (e: any) {
    res.sendStatus(500).json(e.message)
  }
})

// get user info

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    })

    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    console.error("Error fetching user:", error)
    res.status(500).json({ error: "An error occurred" })
  }
})

export default router
