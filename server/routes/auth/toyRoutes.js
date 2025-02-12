import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Multer Setup (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @route POST /toys
 * @desc Create a new toy
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, category, material, price, userId } = req.body;
    const imageBase64 = req.file ? req.file.buffer.toString("base64") : null;

    const newToy = await prisma.toy.create({
      data: {
        title,
        category,
        material,
        price: parseFloat(price),
        image: imageBase64,
        userId,
      },
    });

    res.status(201).json(newToy);
  } catch (error) {
    res.status(500).json({ error: "Error creating toy" });
  }
});

/**
 * @route GET /toys
 * @desc Get all toys
 */
router.get("/", async (req, res) => {
  try {
    const toys = await prisma.toy.findMany();
    res.json(toys);
  } catch (error) {
    res.status(500).json({ error: "Error fetching toys" });
  }
});

/**
 * @route GET /toys/:id
 * @desc Get a single toy by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toy = await prisma.toy.findUnique({ where: { id } });

    if (!toy) {
      return res.status(404).json({ error: "Toy not found" });
    }

    res.json(toy);
  } catch (error) {
    res.status(500).json({ error: "Error fetching toy" });
  }
});

/**
 * @route PUT /toys/:id
 * @desc Update a toy by ID
 */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, material, price, userId } = req.body;
    const imageBase64 = req.file ? req.file.buffer.toString("base64") : undefined;

    const updatedToy = await prisma.toy.update({
      where: { id },
      data: {
        title,
        category,
        material,
        price: parseFloat(price),
        image: imageBase64,
        userId,
      },
    });

    res.json(updatedToy);
  } catch (error) {
    res.status(500).json({ error: "Error updating toy" });
  }
});

/**
 * @route DELETE /toys/:id
 * @desc Delete a toy by ID
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.toy.delete({ where: { id } });
    res.json({ message: "Toy deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting toy" });
  }
});

export default router;
