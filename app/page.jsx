import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Driven Prompts</span>
      </h1>
      <p className="desc text-center">
        Unleash your creativity with AI-powered prompts designed to inspire and
        spark ideas. Share, discover, and collaborate on imaginative, tailored
        content across various topics and interests.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
