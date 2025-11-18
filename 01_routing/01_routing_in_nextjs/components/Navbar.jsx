import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around p-3">
      <div>
        <h1>Next JS</h1>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/user">User</Link>
          </li>
          <li>
            <Link href="/user/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
