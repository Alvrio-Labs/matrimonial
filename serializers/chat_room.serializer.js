const show = async (chat) => {
  const details = {
    id: chat.id,
    sender_id: chat.sender_id,
    receiver_id: chat.receiver_id,
  };
  return details;
};

const index = async (messages) => {
  const messageList = [];
  messages.forEach((u) => {
    const message = {
      id: u.id,
      sender: {
        id: u.id,
        name: u.name,
      },
      receiver: {
        id: u.id,
        name: u.name,
      },
      content: u.content,
      chat_id: u.chat_id,
    };
    messageList.push(message);
  });
  return messageList;
};


module.exports = {
  show, index,
};
