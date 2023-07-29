import mongoose from "mongoose";

let isConnected = false;

const ConnectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("🎉🎊 MongoDB🍃 connected 🔥 ...");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gpt-prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log("... mongoDB not connected 🚫", error);
  }
};
export { ConnectToDB };
