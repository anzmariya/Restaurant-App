import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call to thunk
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})

const restaurantSlice = createSlice({
    name : 'restaurantList',                    //can't call api(asynchronous) directly so we use promise method
    initialState: {                           //promise method:
        loading:false,                          //pending
        allRestaurant:[],                       //resolve
        searchRestaurant:[],
        error:""                                //reject
    },
    extraReducers : (builder)=>{
        // builder holds the value/response from the thunk
        builder.addCase(fetchRestaurant.pending,(state)=>{                //pending state
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{       //fulfilled state(resolve state)
            state.loading = false
            state.allRestaurant=action.payload
            state.searchRestaurant=action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{        //rejected state
            state.loading=false
            state.allRestaurant=""
            state.error=action.error.message
        })

    },

    reducers: {
        search :(state,action)=>{
            state.allRestaurant = state.searchRestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
            
        }
    }

})

export const {search} = restaurantSlice.actions
export default restaurantSlice.reducer

// Thunk: 
    // -Accept an action type string and a function that returns a promise and generates a thunk that dispatches pending/rejected/fullfilled action type based on that promise.
    // -thunk is not the part of slice, its a separate method in toolkit.
    // To create thunk- createAsyncThunk('sliceName,thunkName',()=>{})

    // extraReducers is a key (functions to change state)

    // builder: holds the value or response from the thunk
    // addCase: it can only change the value of state