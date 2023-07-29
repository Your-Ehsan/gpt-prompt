import mongoose from "mongoose";

let isConnected = false;

const ConnectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB🍃 already connected 🔥");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gpt-prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("🎉🎊 MongoDB🍃 connected 🔥 ...");
  } catch (error) {
    console.log("... mongoDB not connected 🚫", error);
  }
};
export { ConnectToDB };
