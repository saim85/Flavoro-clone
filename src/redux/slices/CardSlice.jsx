import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name : 'cart',
    initialState:{
        cart : [],
    }, 

    reducers: {
        addTocart: (state , action)=> {
            const existingItem = state.cart.find( item => item.id === action.payload.id)

            if(existingItem) {
           state.cart = state.cart.map( (item) => item.id === action.payload.id ? {...item, qty:item.qty +  1} : item) 
          }
          else { 
            state.cart.push(action.payload)

          }
        
        },
       removeFromCart : (state , action)=> {
        state.cart = state.cart.filter((item)=> item.id != action.payload.id)
       },
       
       incrementqty : (state, action)=> {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item , qty: item.qty+ 1} : item)
       },
       decrementqty:(state , action)=> {
        state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item , qty: item.qty- 1} : item)
       }
    }
})


export const {addTocart  , removeFromCart , incrementqty , decrementqty } = CartSlice.actions

export default CartSlice.reducer;