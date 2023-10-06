import { MongoClient } from 'mongodb';

export const getDbConnection = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    const db = client.db('pixel-perfect');
    return db;
  } catch (error) {
    console.log(error);
  }
};
