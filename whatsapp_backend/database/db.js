import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@whatsapp-clone.pxr69.mongodb.net/WHATSAPP-CLONE?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting to mongodb ", error);
  }
};

export default Connection;
