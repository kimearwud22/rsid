import { prisma } from "../../../libs/prisma.libs";
import path from "path";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};
 
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    }
  }),
  limits: {
    fileSize: 10000000, // 1 MB
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const { judul, isi } = req.body;
      const image = `/uploads/${req.file.filename}`;
      try {
        const artikel = await prisma.artikel.create({
          data: {
            judul,
            isi,
            image,
          },
        });
        res.status(201).json({ data: artikel });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
