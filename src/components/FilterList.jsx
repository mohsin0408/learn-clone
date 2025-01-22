import React from "react";

const FilterList = ({ item, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="p-2 list-none cursor-pointer hover:bg-gray-200">
      {item}
    </li>
  );
};

export default FilterList;
