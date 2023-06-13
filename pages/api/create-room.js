
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://glucoso:Xdcjt33Fvc7jwShP@mox.l1obwjz.mongodb.net/<dbname>?retryWrites=true&w=majority';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, coordinates } = req.body;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      await client.connect();

      const collection = client.db("<dbname>").collection("rooms");

      const result = await collection.insertOne({
        title,
        description,
        coordinates,
      });

      res.status(200).json(result.ops[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error connecting to MongoDB', details: error });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}
