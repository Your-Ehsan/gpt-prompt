"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePrompt = () => {
  const router = useRouter(),
    searchParams = useSearchParams(),
    promptId = searchParams.get("id"),
    { data: session } = useSession(),
    [Submitting, setSubmitting] = useState(false),
    [Post, setPost] = useState({
      prompt: "",
      tag: "",
    }),

    _UpdatePrompt = async (e) => {
      e.preventDefault();

      if (session?.user.id !== Post.creator._id && !promptId) {
        alert(
          "Specified prompt not found. only Creator may edit their prompts",
        );
      }
      setSubmitting(true);

      try {
        const response = await fetch(`/api/prompt/${promptId}`, {
          method: "PATCH",
          body: JSON.stringify({
            prompt: Post.prompt,
            tag: Post.tag,
          }),
        });

        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);

        if (response.ok) {
          const data = await response.json();
          setPost(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [promptId]);

  return (
    <Form
      type={Submitting ? 'updating' : "edit"}
      post={Post}
      setPost={setPost}
      Submitting={Submitting}
      handleSubmit={_UpdatePrompt}
    />
  );
};

export default UpdatePrompt;
