import LogoutButton from '../form/LogoutButton';
import { messagesCollection } from '../../api/db-connection/messagesCollection';
import MessagesFromUsers from './MessagesFromUsers';
const AdminPageComponent = async () => {
  const collection = await messagesCollection();
  const messages = await collection.find().toArray();
  return (
    <div>
      <h1>Bem-vindo, admin.</h1>
      <LogoutButton>Logout</LogoutButton>
      {messages
        .map((msg) => <MessagesFromUsers key={String(msg._id)} msg={msg} />)
        .reverse()}
    </div>
  );
};

export default AdminPageComponent;
