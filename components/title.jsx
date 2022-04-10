import Nav from "./nav";

const Header = (props) => {
  return (
    <>
      <div className="justify-center flex">
        <div className="py-8 px-6 bg-white flex flex-col sm:flex-row sm:justify-between sm:gap-12 gap-2 w-5/6 max-w-7xl justify-center">
          <p className="font-sans sm:basis-1/2 text-slate-600 text-3xl text-center sm:text-left ">
            Brian Colclough
          </p>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;
