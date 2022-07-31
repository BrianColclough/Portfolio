import Link from "next/link";
import GithubSVG from "./svg/github";

const Nav = (props) => {
  return (
    <>
      <nav className="font-wotfard-500 text-lg sm:text-xl text-ui-text-regular flex flex-row justify-center items-center gap-4">
        <Link href="/">
          <a className="sm:transition sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple ">
            Home
          </a>
        </Link>
        <Link href="/pictures">
          <a className="sm:transition  sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple">
            Pictures
          </a>
        </Link>
        <Link href="/post">
          <a className="sm:transition  sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple">
            Blog
          </a>
        </Link>
        <GithubSVG />
      </nav>
    </>
  );
};

export default Nav;
