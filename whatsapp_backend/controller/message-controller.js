import Message from "../model/message.js";

export const newMessage = async (request, response) => {
  const newMessage = new Message(request.body);
  try {
    await newMessage.save();
    response.status(200).json("Message saved Successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getMessage = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};
