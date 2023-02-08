
const show = async (msg) => {
  const details = {
    id: msg.id,
    sender_id: msg.sender_id,
    receiver_id: msg.receiver_id,
    messages: msg.messages,
    chat_id: msg.chat_id,
  };
  return details;
};
module.exports = {
  show,
};
