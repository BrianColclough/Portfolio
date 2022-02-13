const Grid = (props) => {
  return (
    <div className="flex flex-col sm:px-8 sm:py-0 sm:flex-row sm:flex-wrap gap-8 sm:items-center sm:justify-center py-2 px-2">
      {props.children}
    </div>
  );
};

export default Grid;
