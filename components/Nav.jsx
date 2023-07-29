"use client";
import { getProviders, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const UserLogedIn = true,
    [Provider, setProvider] = useState(null),
    [Dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const Authprovider = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    return () => Authprovider();
  }, []);

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
              width={26}
              height={26}
            />
          </Link>
        </div>
      ) : (
        <div>
          {Provider &&
            Object.values(Provider).map((_provider) => {
              <button
                type="button"
                onClick={() => signIn(_provider.id)}
                key={_provider.name}
                className="black_btn"
              >
                sign in
              </button>;
            })}
        </div>
      )}
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {UserLogedIn ? (
          <div className="flex">
            <Image
              alt="image alt txt "
              src={"/assets/images/logo.svg"}
              onClick={() => {
                setDropdown((prevState) => !prevState);
              }}
              width={20}
              height={20}
            />
            {Dropdown && (
              <div>
                <div className="dropdown">
                  <Link
                    onClick={() => setDropdown(false)}
                    className="dropdown_link"
                    href={"/profile"}
                  >
                    profile
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    onClick={() => setDropdown(false)}
                    className="dropdown_link"
                    href={"/create-prompt"}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setDropdown(false);
                      signOut();
                    }}
                  >Sign out</button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {Provider &&
              Object.values(Provider).map((_provider) => {
                <button
                  type="button"
                  onClick={() => signIn(_provider.id)}
                  key={_provider.name}
                  className="black_btn"
                >
                  sign in
                </button>;
              })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
