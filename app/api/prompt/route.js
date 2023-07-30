import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

const GET = async () => {
  try {
    await ConnectToDB();
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("error finding prompts", { status: 500 });
  }
};
export { GET };
