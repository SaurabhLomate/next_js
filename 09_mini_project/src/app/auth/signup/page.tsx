"use client";
import FormTemplate from "@/components/FormTemplate";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [isToggle, setIsToggle] = useState<true | false>(false);
  return (
    <div className="flex justify-center items-center h-full tracking-wider">
      <FormTemplate>
        <div className="flex flex-col justify-center">
          <div className="relative transform -rotate-12 h-10 bg-amber-600 w-[100px] flex place-self-center justify-center my-5 text-black">
            <h2 className="absolute text-3xl text-center font-bold">SignUp</h2>
          </div>

          {/* <hr /> */}
          <div className="flex gap-3 mx-2 my-4">
            <label htmlFor="f_name" className="flex flex-col">
              <span>First Name: </span>
              <input
                id="f_name"
                type="text"
                placeholder="First Name"
                className="border-b border-white placeholder-gray-500 outline-0 ps-1 py-2 text-amber-700"
              />
            </label>
            <label htmlFor="l_name" className="flex flex-col">
              <span>Last Name : </span>
              <input
                id="l_name"
                type="text"
                placeholder="Last Name"
                className="border-b outline-0 ps-1 py-2 text-amber-700  border-white placeholder-gray-500"
              />
            </label>
          </div>
          <label htmlFor="email" className="flex gap-0.5 w-full my-4">
            <span>Email : </span>
            <input
              type="email"
              name="email"
              id="email"
              className="border-b outline-0 ps-1 flex-1  text-amber-700  border-white placeholder-gray-500"
            />
          </label>
          <label
            htmlFor="password"
            className="flex gap-0.5 w-full my-4 relative"
          >
            <span>Password : </span>
            <input
              type={isToggle ? "text" : "password"}
              name="password"
              id="password"
              className="border-b outline-0 ps-1 flex-1  text-amber-700  border-white placeholder-gray-500 after"
            />
            <span
              onClick={() => setIsToggle((prev) => !prev)}
              className="absolute right-6 size-0.5 text-amber-700"
            >
              {isToggle ? <FaEye /> : <FaEyeSlash />}
            </span>
          </label>
          <div className="relative border-2 text-xl border-amber-600 rounded-2xl w-fit flex self-center my-6 hover:bg-gray-900 hover:text-amber-700">
            <button
              type="submit"
              className="flex justify-between items-center border-2 border-amber-600 px-10 py-3 rounded-2xl relative left-1 top-1"
            >
              Signup
            </button>
          </div>
          <p className="text-center">
            already have an account ?{" "}
            <Link
              href={"/auth/signin"}
              className="hover:text-amber-700 border-b border-b-amber-500 relative "
            >
              <span className="hover:text-amber-700 border-b border-b-amber-500 relative top-0.5">
                SingIn
              </span>
            </Link>
          </p>
          <div className="flex justify-around gap-2">
            <p className="border-b flex-1"></p>
            <p className="text-amber-700 text-base relative top-3">OR</p>
            <p className="border-b flex-1"></p>
          </div>
          <div className="flex justify-around items-center gap-2">
            <div className="relative border-2 text-xl border-amber-600 rounded-2xl w-fit flex self-center my-6 hover:bg-gray-900 hover:text-amber-700">
              <button
                type="submit"
                className="flex justify-between items-center border-2 border-amber-600 px-10 py-3 rounded-2xl relative left-1 top-1"
              >
                <FcGoogle className="mr-2" />
                Google
              </button>
            </div>
            <div className="relative border-2 text-xl border-amber-600 rounded-2xl w-fit flex self-center my-6  hover:bg-gray-900 hover:text-amber-700 group">
              <button
                type="submit"
                className="flex justify-between items-center border-2 border-amber-600 px-10 py-3 rounded-2xl relative left-1 top-1 "
              >
                <FaGithub className="mr-2 group-hover:text-white" />
                Github
              </button>
            </div>
          </div>
        </div>
      </FormTemplate>
    </div>
  );
};

export default SignUp;
