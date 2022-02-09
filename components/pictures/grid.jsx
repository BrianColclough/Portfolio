const Grid = (props) => {
  return (
    <div className="flex flex-row px-8 py-0 flex-wrap flex-auto gap-8 items-center justify-center">
      {props.children}
    </div>
  );
};

export default Grid;
