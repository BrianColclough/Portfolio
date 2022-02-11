const { default: Image } = require("next/image");

const Viewer = (props) => {
  function closeHandler() {
    props.onClose();
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 ">
      <Image
        className="backdrop-blur-2xl z-10 "
        alt="this is a test"
        src={props.image}
        layout="fill"
        objectFit="scale-down"
        onClick={closeHandler}
      />
    </div>
  );
};

export default Viewer;
