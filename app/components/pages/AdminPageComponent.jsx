import LogoutButton from "../form/form-elements/LogoutButton";
import { messagesCollection } from "../../api/db-connection/messagesCollection";
import MessagesFromUsers from "../MessagesFromUsers";
import styles from "./adminpage.module.css";

const AdminPageComponent = async () => {
  const collection = await messagesCollection();
  const messages = await collection.find().toArray();
  return (
    <div className={styles.content}>
      <header>
        <h1>Pedidos</h1>
        <LogoutButton>Logout</LogoutButton>
      </header>
      {messages
        .map((msg) => <MessagesFromUsers key={String(msg._id)} msg={msg} />)
        .reverse()}
    </div>
  );
};

export default AdminPageComponent;
