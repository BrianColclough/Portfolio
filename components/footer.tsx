import Linkedin from "./svg/linkedin";
import Twitter from "./svg/twitter";

const Footer = (props) => {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className=" flex flex-row justify-center py-10 gap-6">
        <Twitter />
        <Linkedin />
      </div>
    </footer>
  );
};

export default Footer;
