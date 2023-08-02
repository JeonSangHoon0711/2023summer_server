import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

const getUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM category');
  return rows;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const users = await getUsers();
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: 'Method not supported' });
  }
};
