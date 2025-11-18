import React from "react";
import ButtonLayout from "./ButtonLayout";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative border-2 text-xl border-amber-600 rounded-2xl my-3 mx-10">
      <div className="flex justify-between items-center border-2 border-amber-600 px-10 py-3 rounded-2xl relative left-1 top-1">
        {/* logo */}
        <ButtonLayout label="Logo" type="logo" />
        {/* home / about */}
        <div className="flex gap-5 ">
          <div>
            <Link
              href={"/"}
              className="text-2xl hover:text-xl hover:text-amber-600"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="text-2xl hover:text-xl hover:text-amber-600"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="text-2xl hover:text-xl hover:text-amber-600"
            >
              Home
            </Link>
          </div>
        </div>
        {/* signout/login/signup image */}
        <div className="hidden sm:flex justify-around items-center gap-8">
          <ButtonLayout label="SignIn" type="button" href="/auth/signin" />
          <ButtonLayout label="SignUp" type="button" href="/auth/signup" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
