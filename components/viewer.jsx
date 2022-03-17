const { default: Image } = require("next/image");

const Viewer = (props) => {
  function closeHandler() {
    document.body.style.overflow = "visible";
    props.onClose();
  }
  return (
    <div className="fixed overflow-hidden top-0 left-0 w-full h-full z-10 overscroll-contain">
      <Image
        className="backdrop-blur-2xl p-10 z-10 "
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
