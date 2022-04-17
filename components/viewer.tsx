const { default: Image } = require("next/image");

const Viewer = (props) => {
  function closeHandler() {
    document.body.style.overflow = "visible";
    props.onClose();
  }
  return (
    <div className="fixed overflow-hidden z-50 top-0 left-0 w-full h-full overscroll-contain">
      <Image
        className="backdrop-blur-2xl p-10 z-50 "
        alt={props.alt}
        src={props.image}
        type="image/webp"
        layout="fill"
        objectFit="scale-down"
        onClick={closeHandler}
      />
    </div>
  );
};

export default Viewer;
