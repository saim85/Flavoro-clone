import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore( {
    reducer:{
        cart : CardSlice,
        category: CategorySlice,
        search: SearchSlice,
    },
})

export default Store;