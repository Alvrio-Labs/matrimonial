
const show = async (msg) => {
  const details = {
    id: msg.id,
    sender_id: msg.sender_id,
    receiver_id: msg.receiver_id,
    content: msg.content,
    chat_id: msg.chat_id,
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
