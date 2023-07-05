import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function monsterHandler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    if (req.method === 'GET') {
        try {
            const monsters = await prisma.monster.findMany()
            return res.status(200).json(monsters)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Failed to fetch monsters' });
        }
    } else if (req.method === 'POST') {
        try {
            const newMonster = await prisma.monster.create({ data: req.body })
            res.status(201).json(newMonster)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Failed to create monsters' });
        }
    }
}