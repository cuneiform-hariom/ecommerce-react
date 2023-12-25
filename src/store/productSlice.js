import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const STATUES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUES.IDLE,

    },
    extraReducers: (builder) =>{
        builder 
        .addCase(fetchProducts.pending,(state, action)=>{
            state.status = STATUES.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state, action)=>{
            state.data = action.payload;
            state.status = STATUES.IDLE
        })
        .addCase(fetchProducts.rejected,(state, action)=>{
            state.status = STATUES.ERROR
        })
    }

})

export const { setProduct, setStatus } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('producst/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data;
})