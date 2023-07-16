import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    prisma.booking.findMany().then((data) => {
        res.status(200).json({data:data});
    }
    ).catch((error) => {
        res.status(500).json(error);
    }
    )
}