import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function hatredHandler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    if (req.method === 'GET') {
        try {
            const hats = await prisma.hatred.findMany()
            res.status(200).json(hats)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Failed to fetch hats' });
        }
    } else if (req.method === 'POST') {
        try {
            const newHat = await prisma.hatred.create({ data: req.body })
            res.status(201).json(newHat)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Failed to create hats' });
        }
    }
}