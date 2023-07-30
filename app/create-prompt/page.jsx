"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePrompt = () => {
  const router = useRouter(),
    [Submitting, setSubmitting] = useState(false),
    { data: session } = useSession(),
    [Post, setPost] = useState({
      prompt: "",
      tag: "",
    }),
    _createPrompt = async (e) => {
      e.preventDefault();
      setSubmitting(true);
      try {
        const response = await fetch("/api/prompt/new", {
          method: "POST",
          body: JSON.stringify({
            prompt: Post.prompt,
            tag: Post.tag,
            userId: session?.user.id,
          }),
        });

        if (response.ok) {
          router.push('/');
        }
      
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    };

  return (
    <Form
      type="Create"
      post={Post}
      setPost={setPost}
      Submitting={Submitting}
      handleSubmit={_createPrompt}
    />
  );
};

export default CreatePrompt;
