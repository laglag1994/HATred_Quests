import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function requirementHandler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    if (req.method === 'GET') {
        try {
            const requirement = await prisma.requirements.findMany()
            return res.status(200).json(requirement)
            console.log(requirement)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Failed to fetch requirements' });
        }
    } else if (req.method === 'POST') {
        try {
            const newrequiers = await prisma.requirements.create({ data: req.body })
            res.status(201).json(newrequiers)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Failed to create requirements' });
        }
    }
}