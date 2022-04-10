import Link from "next/link";
import GithubSVG from "./svg/github";

const Nav = (props) => {
  return (
    <>
      <nav className="font-sans text-lg text-ui-navy flex flex-row justify-center items-center gap-4">
        <Link href="/">
          <a className="sm:transition sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple ">
            Home
          </a>
        </Link>
        <Link href="/pictures">
          <a className="sm:transition sm:rounded-lg sm:ease-in-out sm:delay-75 sm:px-2 sm:hover:scale-110 hover:text-ui-purple">
            Pictures
          </a>
        </Link>
        <GithubSVG />
      </nav>
    </>
  );
};

export default Nav;
