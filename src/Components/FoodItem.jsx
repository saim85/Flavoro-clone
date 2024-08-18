import React from 'react'
import FoodCard from './FoodCard'
import FoodData from  '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
// import setSearch  from  '../redux/slices/SearchSlice.jsx'

function FoodItem() {
  const category = useSelector( (state) => state.category.category)
  const search = useSelector((state)=> state.search.search)
  // console.log(search);
  
    const handletost = (name)=> toast.success(`${name} add to cart`)
   

  return (
    <>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className='flex  flex-wrap gap-8 ms-2  justify-center lg:justify-start md:w-[1440px]
   my-6'>


    {
      FoodData.filter( (food) => {
        if(category === 'All'){
          return food.name.toLowerCase().includes(search.toLowerCase());
        }
        else {
          return  category === food.category &&
          food.name.toLowerCase().includes(search.toLowerCase())
        }
      }).map( (food) => (

              <FoodCard
                 key={food.id}
                 id={food.id}
                 name={food.name}
                 price={food.price}
                 desc={food.desc}
                 img={food.img}
                 rating={food.rating}
                 handletost={handletost}   
            />
      ))
    }
   
   </div>
    </>

 
  )
}

export default FoodItem
