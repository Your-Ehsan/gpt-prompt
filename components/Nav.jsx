"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const UserLogedIn = true,
    [Provider, setProvider] = useState(null);
  useEffect()
    return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"}>
        <Image
          alt="Image with alt"
          src={"assets/images/logo.svg"}
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
      <p className="logo_text">Promptopia</p>
      <div className="sm:flex hidden"></div>
      {UserLogedIn ? (
        // desktop navigation
        <div className="flex gap-3 md:gap-5">
          <Link href={"/create-post"} className="black_btn">
            Create Post
          </Link>
          <button type="button" className="outline_btn" onClick={signOut}>
            Sign out
          </button>
          <Link href={"/profile"}>
            <Image
              src={"/assets/images/logo.svg"}
              alt="this is alt text"
              width={37}
              height={37}
            />
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Nav;
