import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & share
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center">AI powered Prompts</span>
    </h1>
    <p className="desc text-center">
      Lorem ipsum dolor sit amet consectetur ad ipisicing elit. Reiciendis cum accusamus illum mollitia modi voluptates soluta officia
    </p>
    <Feed/>
  </section>;
};

export default Home;
