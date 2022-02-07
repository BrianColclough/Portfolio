import Linkedin from "./svg/linkedin";
import Twitter from "./svg/twitter";

const Footer = (props) => {
  return (
    <div className=" flex flex-row justify-center py-10 gap-6">
      <Twitter />
      <Linkedin />
    </div>
  );
};

export default Footer;
