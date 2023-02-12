/* eslint-disable operator-linebreak */
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.cpe1abx.mongodb.net/?retryWrites=true&w=majority`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === 'POST') {
    const bodyData = req.body;
    const { email, name, message } = bodyData;
    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'invalid input' });
      return;
    }
    const uri = connectionString;
    let client;
    try {
      client = new MongoClient(uri, {
        serverApi: ServerApiVersion.v1,
      });
      await client.connect();
    } catch (error) {
      console.log(error);
    }

    const collection = client?.db('blog').collection('contact');

    try {
      await collection?.insertOne(bodyData);
      res.status(201).json({
        message: 'you have successfully registered to newsletters!!',
        bodyData,
      });
      return;
    } catch (err) {
      throw new Error('Server Error');
    } finally {
      client?.close();
    }
  } else {
    res.status(200).json({ message: 'great' });
  }
}
