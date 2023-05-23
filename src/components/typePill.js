const TypePill = ({ type, color }) => {
  if (color == undefined) {
    color = "gray";
  }
  return (
    <li
      key={type}
      className="badge badge-pill m-1"
      style={{ backgroundColor: color }}
    >
      {type}
    </li>
  );
};

export default TypePill;
