const index = async (messages) => {
  const messageList = [];
  messages.forEach((u) => {
    const user = {
      id: u.id,
      sender: {
        id: u.id,
        name: u.name,
      },
      receiver: {
        id: u.id,
        name: u.name,
      },
      message: u.Message.message,
    };
    messageList.push(user);
  });
  return messageList;
};
const show = async (msg) => {
  const details = {
    id: msg.id,
    sender_id: msg.sender_id,
    receiver_id: msg.receiver_id,
    message: msg.message,
  };
  return details;
};
module.exports = {
  index,
  show,
};
