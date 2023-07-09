import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'alawihabibqalbiabuhussinanakhadmkmalsghir';

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (username === 'admin' && password === 'admin') {
            const token = jwt.sign({ username, admin: true }, KEY);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

