import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../src/db';
import { characters } from '../../../src/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, race, characterClass, abilities, description, equipment } = req.body;

    try {
      const client = await pool.connect();
      const query = `
        INSERT INTO characters (name, race, class, abilities, description, equipment)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [name, race, characterClass, abilities, description, equipment];
      const result = await client.query(query, values);
      client.release();

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating character:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const query = 'SELECT * FROM characters';
      const result = await client.query(query);
      client.release();

      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching characters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
