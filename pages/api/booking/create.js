import { prisma } from "../../../libs/prisma.libs";
import { parseISO } from "date-fns";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { nama, tlpn, alamat, date, sampah, jsampah, pesan } = req.body;
        try {
            const booking = await prisma.booking.create({
                data: {
                    nama,
                    tlpn,
                    alamat,
                    date: parseISO(date), 
                    sampah,
                    jsampah,
                    pesan,
                },
            });
            res.status(200).json({ data: booking });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
