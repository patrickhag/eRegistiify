import { Router, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import multer from "multer"

const prisma = new PrismaClient()
const router = Router()

// Create a new phone
router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      userId,
      imeiNumber,
      brand,
      model,
      dateOfPurchase,
      priceOfPhone,
      reportedStatus,
      description,
      category,
    } = req.body

    console.log(req.body)

    const date = new Date(dateOfPurchase)

    const user = await prisma.user.findUnique({
      where: { id: userId },
    })
    if (!user) {
      return res.status(404).json({ msg: "User not found" })
    } else {
      // Create a new phone
      const phone = await prisma.phone.create({
        data: {
          imeiNumber,
          brand,
          model,
          dateOfPurchase: date,
          priceOfPhone,
          reportedStatus,
          description,
          category,
          user: {
            connect: { id: userId },
          },
        },
      })
      res.json({ status: "ok", phone })
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

// get phone based on id

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const foundPhone = await prisma.phone.findMany({
      where: {
        userId: id,
      },
    })
    res.json({ msg: "ok", foundPhone })
  } catch (error: any) {
    res.status(400).json({ status: error.message })
  }
})

router.get("/", async (req: Request, res: Response) => {
  try {
    const allPhones = await prisma.phone.findMany()
    res.status(200).json(allPhones)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err)
    } else {
      console.error("Unexpected Error", err)
    }
  }
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully", url: req.file })
})

export default router
