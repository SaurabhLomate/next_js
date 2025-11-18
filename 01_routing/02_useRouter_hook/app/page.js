"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  console.log(router);

  const navigate = (page) => {
    router.push(page);
  };
  return (
    <div className="text-red-500">
      <button
        className="px-2 py-1 border rounded-lg m-3"
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        className="px-2 py-1 border rounded-lg m-3"
        onClick={() => navigate("/user")}
      >
        User
      </button>
      <button
        className="px-2 py-1 border rounded-lg m-3"
        onClick={() => navigate("/user/about")}
      >
        About
      </button>
      //? *************** IGNORING ROUTES  ***************
      <button
        className="px-2 py-1 border rounded-lg m-3"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
      <button
        className="px-2 py-1 border rounded-lg m-3"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default Home;
