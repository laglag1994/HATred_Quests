import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hatredHandler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    try {
      const hats = await prisma.hatred.findMany({
        include: { requirements: true },
      });
      res.status(200).json(hats);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch hats' });
    }
  } else if (req.method === 'POST') {
    try {
      const newHat = await prisma.hatred.create({
        data: {
          hatName: req.body.hatName,
          hatImg: req.body.hatImg,
          mapName: req.body.mapName,
          mapImg: req.body.mapImg,
          mapLvlFrom: req.body.mapLvlFrom,
          mapLvlTo: req.body.mapLvlTo,
          info: req.body.info,
          tier: req.body.tier,
          requirements: {
            create: req.body.reqs.map((req: string) => ({ reqs: req })),
          },
        },
        include: { requirements: true },
      });
      res.status(201).json(newHat);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create a hat' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const  id  = req.body.id;

      const deletedHat = await prisma.hatred.delete({
        where: {
          id: id, 
        },
      });
      res.status(200).json(deletedHat);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete the hat' });
    }
  }
}
