import Nav from "./nav";

const Header = (props) => {
  return (
    <>
      <div className="py-8  bg-white  flex flex-row justify-around gap-12 ">
        <p className="font-sans basis-1/2 text-slate-600 text-3xl text-left ">
          Brian Colclough
        </p>
        <Nav />
      </div>
    </>
  );
};

export default Header;
