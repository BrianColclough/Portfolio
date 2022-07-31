import Nav from "./nav";

const Header = (props) => {
  return (
    <header className="bg-ui-white sticky z-40 sm:py-2 top-0 ">
      <div className="justify-center flex">
        <div className="h-20 sm:h-14 items-center px-6 flex flex-col sm:flex-row sm:justify-between sm:gap-12 gap-2 w-5/6 max-w-6xl justify-center">
          <h1 className="sm:basis-1/2 font-wotfard-500 tracking-tight text-ui-bright-blue text-3xl text-center sm:text-left ">
            Brian Colclough
          </h1>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
