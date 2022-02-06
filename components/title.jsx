import Nav from "./nav";

const Header = (props) => {
  return (
    <>
      <div className="justify-center flex">
        <div className="py-8  px-6 bg-white flex flex-row justify-between gap-12  w-5/6 max-w-7xl">
          <p className="font-sans basis-1/2 text-slate-600 text-3xl text-left ">
            Brian Colclough
          </p>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;
