import React from "react";

const FilterList = ({ item, toggle, index }) => {
  return (
    <li key={index} className="list-none ">
      {toggle && <p>{item}</p>}
    </li>
  );
};

export default FilterList;
