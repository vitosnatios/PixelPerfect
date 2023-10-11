import React from "react";
import styles from "./messages.module.css";
const MessagesFromUsers = ({ msg }) => {
  const { name, email, branch, message, date } = msg;
  return (
    <div className={styles.messageCard}>
      <header>
        <span className={styles.date}>{date}</span>
        <span className={styles.email}>{email}</span>
      </header>

      <p>
        <strong>Nome:</strong> {name}
      </p>

      <p>
        <strong>Ramo:</strong> {branch}
      </p>

      <p>
        <strong>Mensagem:</strong>
        <br /> {message}
      </p>
    </div>
  );
};

export default MessagesFromUsers;
