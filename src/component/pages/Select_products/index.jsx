import React from "react";
import { useSelector } from "react-redux";

function Select_products() {
  const filterdata = useSelector((state) => state.cinema.CategoryBooks);

  return (
    <div className="grid grid-cols-4 mt-4 gap-4">
      {filterdata.map((e) => (
        <div className="flex flex-col justify-between" >
          <img className="w-[50%]" src={e.image} alt={e.title} />
          <p className="text-[16px] font-normal text-[#ADADAD]">
            {e.author}
          </p>
          <p className="text-[21px] font-semibold text-yellow-50">
            {e.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Select_products;
