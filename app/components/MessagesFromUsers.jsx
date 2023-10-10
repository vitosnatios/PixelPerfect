import React from 'react';

const MessagesFromUsers = ({ msg }) => {
  const { name, email, branch, message, date } = msg;
  return (
    <div style={{ border: '1px solid black' }}>
      <p>{date}</p>
      <p>
        Nome: {name} - Email: {email}
      </p>
      <p>Ramo: {branch}</p>
      <p>Mensagem: {message}</p>
    </div>
  );
};

export default MessagesFromUsers;
