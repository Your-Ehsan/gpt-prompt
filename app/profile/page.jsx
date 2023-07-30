"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const router = useRouter(),
    { data: session } = useSession(),
    [UserPosts, setUserPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);

        if (response.ok) {
          const data = await response.json();
          setUserPosts(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [session]);

  return (
    <section>
      <Profile
        name=""
        desc=""
        data={UserPosts}
        handleDelete={async ({ _id }) => {
          const confirmed = confirm(
            "Are you sure you want to delete this prompt",
          );

          if (confirmed) {
            try {
              const response = await fetch(`/api/prompt/${_id}`, {
                method: "DELETE",
              });

              if (response.ok) {
                const data = await response.json();
                alert(data);
                setUserPosts((prePosts) => {
                  prePosts.filter((_post) => _post._id !== _id);
                });
              }
            } catch (error) {
              console.error(error);
            }
          }
        }}
        handleEdit={({ _id }) => {
          router.push(`/update-prompt?id=${_id}`);
        }}
      />
    </section>
  );
};

export default UserProfile;
