import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";




function Cart() {
  

  const [activeCart , setActiveCart] = useState(true)

  const cartItems = useSelector((state) => state.cart.cart)
  // console.log(cartItems);

  const totalQty = cartItems.reduce( (totalQty , item) => totalQty + item.qty,  0)
  const totalPrice = cartItems.reduce( (total , item) => total + item.qty * item.price, 0)
  
  
  return (
    <>

      <div
        className={`fixed top-0 right-0 bg-white lg:w-[20vw] w-full h-full
   p-5 mb-3 ${ activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500`}
  >
        {/* card start */}
        <div className="flex justify-between">
          <span className="font-bold ">My order</span>
          
          <IoMdClose
          onClick={ ()=> setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 
        hover:text-white hover:bg-red-600 rounded-md p-1 text-xl cursor-pointer "
          />
          
        </div>
        {
       cartItems.length > 0 ?  cartItems.map( (food) => {
          return   <ItemCard 
           key={food.id }
           id={food.id}
           img={food.img} 
           price={food.price}   
           qty={food.qty}
           name = {food.name} 
          
               />
        }) : <h2 className="text-xl text-center py-3 text-gray-800 font-bold">Your Cart is empty</h2>
        }
      

        {/* cart bottom section */}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800 ">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800 ">Items Account : {totalPrice} </h3>
          <hr className="lg:w-[18vw] w-[90vw] my-2" />

          <button
         onClick={()=> alert("order is complete to checkout") }
            className="bg-green-600 text-white rounded-md
        lg:w-[18vw] w-[90vw] px-4 py-2 mb-5 "
          >
            Checkout
          </button>
        </div>

        {/* cart button */}
    
      </div>

      <FaShoppingCart 
      onClick={()=> setActiveCart(!activeCart)}
      className="rounded-full bg-white shadow-md text-5xl p-3 
      fixed bottom-4 right-4 "
      />
      
    </>
  );
}

export default Cart;
