import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await ConnectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag: tag,
      prompt: prompt,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create prompt | server error", {
      status: 500,
      statusText: "internal server error",
    });
  }
};
export { POST };
