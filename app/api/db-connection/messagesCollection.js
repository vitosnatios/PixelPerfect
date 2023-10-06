import { getDbConnection } from './getDbConnection';

export async function messagesCollection() {
  const db = await getDbConnection();
  const collection = db.collection('messages');
  return collection;
}
