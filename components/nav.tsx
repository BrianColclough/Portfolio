import Link from "next/link";
import GithubSVG from "./svg/github";

const Nav = (props) => {
  return (
    <>
      <nav className="font-wotfard-500 text-lg sm:text-xl text-ui-text-regular flex flex-row justify-center items-center gap-4">
        <Link href="/">
          <a
            role="button"
            className="sm:transition sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple "
          >
            Home
          </a>
        </Link>
        <Link href="/pictures">
          <a
            role="button"
            className="sm:transition  sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple"
          >
            Pictures
          </a>
        </Link>
        <Link href="/blog">
          <a
            role="button"
            className="sm:transition  sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple"
          >
            Blog
          </a>
        </Link>
        <GithubSVG role="button" />
      </nav>
    </>
  );
};

export default Nav;
