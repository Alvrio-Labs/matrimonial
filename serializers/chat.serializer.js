
const show = async (chat) => {
  const details = {
    id: chat.id,
    sender_id: chat.sender_id,
    reciever_id: chat.reciever_id,
  };
  return details;
};
module.exports = {
  show
};
