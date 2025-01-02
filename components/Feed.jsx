"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
    // const [SearchTag, setSearchTag] = useState(""),
      const [Posts, setPosts] = useState([])
    //   handleSearch = (e) => {
    //     e.preventDefault();
    //   };

    useEffect(() => {
      (async () => {
        try {
          const response = await fetch("/api/prompt");

          if (response.ok) {
            const data = await response.json();
            setPosts(data);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }, []);

    return (
      <section className="feed">
        <form className="relative w-full flex-center">
          <input
            type="text"
            placeholder="search for the tag"
            // value={SearchTag}
            // onChange={(e) => handleSearch(e)}
            required
            className="search_input peer"
          />
        </form>
        <PromptCardList data={Posts} handleTagClick={() => {}} />
      </section>
    );
  },
  
  PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => {
          return (
            <PromptCard
              key={post._id}
              {...post}
              handleTagClick={handleTagClick}
            />
          );
        })}
      </div>
    );
  };

export default Feed;
