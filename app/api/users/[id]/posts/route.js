import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

const GET = async (req, { params }) => {
  console.log(params);
  try {
    await ConnectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator",
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("error finding user prompts", { status: 500 });
  }
};
export { GET };
