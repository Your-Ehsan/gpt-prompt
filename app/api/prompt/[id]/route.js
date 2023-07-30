import Prompt from "@models/prompt";
import { ConnectToDB } from "@utils/database";

const GET = async (req, { params }) => {
    console.log(params);
    try {
      await ConnectToDB();
      const prompt = await Prompt.findById(params.id).populate("creator");

      if (!prompt) {
        return new Response("prompt not found", { status: 404 });
      }

      return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("error finding user prompts", { status: 500 });
    }
  },

  PATCH = async (req, { params }) => {
    const { prompt, tag } = req.json();
    try {
      await ConnectToDB();
      const ExistingPrompt = await Prompt.findById(params.id);

      if (!ExistingPrompt) {
        return new Response("prompt not found", { status: 404 });
      }

      ExistingPrompt.prompt = prompt;
      ExistingPrompt.tag = tag;

      await ExistingPrompt.save();

      return new Response(JSON.stringify(ExistingPrompt), { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("error finding prompt prompts", { status: 500 });
    }
  },

  DELETE = async (req, { params }) => {
    try {
      await ConnectToDB();
      await Prompt.findByIdAndDelete(params.id);

      return new Response("prompt deleted sucessfulty", { status: 200 });
    } catch (error) {
      console.error(error);
      return new Response("failed to delete prompt ", { status: 500 });
    }
  };

export { GET, PATCH, DELETE };
