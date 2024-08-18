import React from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { removeFromCart  , incrementqty , decrementqty} from "../redux/slices/CardSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

function ItemCard( {id , name , price , img , qty})   {

  const dispatch = useDispatch()
  
  return (
    <>
      <div className="flex shadow-md rounded-lg gap-2 p-2 mb-3">
        <MdDelete 
        onClick={ () => {dispatch
          ( removeFromCart({ id , name , price , img , qty})
        );
        toast(`${name} Removed! `, {
          icon: '👏',
        });
      }} 
        className="absolute right-7  text-gray-600  cursor-pointer" />

        <img
          src={img}
          alt=""
          className="w-[50px] h-[50px]"
        />

        <div className="leading-5 my-3 ">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <div className="flex justify-between">
            <span className="font-bold text-green-500"> {price}</span>
            <div className="flex justify-between items-center gap-2 absolute right-7">

              <GoPlus 
              onClick={ ()=> qty >=  1 ? dispatch(incrementqty({id})):(qty=0)}
              className="border-2 border-gray-600 text-gray-600 p-1 text-xl rounded-md hover:text-white hover:bg-green-500 hover:border-none transition-all ease-linear cursor-pointer" />
              <span>{qty}</span>

              <HiMinus onClick={()=>qty > 1 ? dispatch(decrementqty({id})) :(qty=0)}
              className="border-2 border-gray-600 text-gray-600 p-1 text-xl rounded-md hover:text-white hover:bg-green-500 hover:border-none transition-all ease-linear cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default ItemCard;
