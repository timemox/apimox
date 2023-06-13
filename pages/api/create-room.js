// pages/api/rooms/create-room.js

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://glucoso:Xdcjt33Fvc7jwShP@mox.l1obwjz.mongodb.net/<dbname>?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, coordinates } = req.body;

    try {
      // Connect the client to the server
      await client.connect();

      // Choose your database
      const db = client.db("<dbname>");

      // Choose your collection within the database
      const collection = db.collection("rooms");

      // Insert a single document into your collection
      const result = await collection.insertOne({
        title,
        description,
        coordinates,
      });

      res.status(200).json(result.ops[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error connecting to MongoDB', details: error });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}


