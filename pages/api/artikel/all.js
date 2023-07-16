import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
  try {
    const data = await prisma.artikel.findMany();
    res.status(200).json({ data : data });
  } catch (error) {
    res.status(500).json(error);
  }
}
