import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";


function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const ListUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
    console.log(categories);
  };

  useEffect(() => {
    ListUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectCategory = useSelector((state) => state.category);

  return (
    <>
      <div className="py-3 ml-6">
        <h3 className="text-xl font-semibold ">Find the best foods</h3>
        <div className="flex gap-4 my-6">

          <button
         onClick={ ()=> dispatch( setCategory('All'))}
            className={`bg-gray-200 px-3 py-2 hover:bg-green-500 hover:text-white font-bold rounded-lg ${
              selectCategory === "All" && "bg-green-500 text-white"
            }`}
          >
            ALL
          </button>

          {/* { console.log(categories , 'categories')} */}

          {/* create map function on category */}

          {categories.map((category, index) => (
            <button
          onClick={ ()=> dispatch(setCategory( category))}
              key={index}
              className={`bg-gray-200 px-3 py-2 hover:bg-green-500 hover:text-white font-bold rounded-lg ${
                selectCategory === "All" && "bg-white text-green"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryMenu;
