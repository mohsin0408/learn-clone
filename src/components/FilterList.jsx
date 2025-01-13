import React from "react";

const FilterList = ({ item, toggle, index, onClick }) => {
  return (
    <ul key={index} className="list-none cursor-pointer ">
      {toggle && <li onClick={onClick}>{item}</li>}
    </ul>
  );
};

export default FilterList;
