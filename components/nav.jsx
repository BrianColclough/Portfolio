import Link from "next/link";

const Nav = (props) => {
  return (
    <>
      <div className="font-sans text-lg text-slate-800 flex flex-row justify-center items-center gap-14">
        <Link href="/">
          <a className="hover:text-purple-300">Home</a>
        </Link>
        <Link href="/pictures">
          <a className="hover:text-purple-300">Pictures</a>
        </Link>
      </div>
    </>
  );
};

export default Nav;
