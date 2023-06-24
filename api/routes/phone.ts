import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

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
    } = req.body;

    const date = new Date(dateOfPurchase);

    // Check if the required fields are provided
    // if (
    //   !userId ||
    //   !imeiNumber ||
    //   !brand ||
    //   !model ||
    //   !dateOfPurchase ||
    //   !description ||
    //   !priceOfPhone ||
    //   !reportedStatus
    // ) {
    //   return res.status(400).json({ msg: "Missing required fields" });
    // }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

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
        user: {
          connect: { id: userId },
        },
      },
    });

    res.json({ msg: "Access denied", phone });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// get phone based on id

router.get("/", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const foundPhone = await prisma.phone.findMany({
      where: {
        userId: id,
      },
    });
    res.json({ msg: "ok", foundPhone });
  } catch (error: any) {
    res.status(400).json({ status: error.message });
  }
});

export default router;
