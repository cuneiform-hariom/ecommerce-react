// store/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const { id, title, price } = action.payload;
            const existingProduct = state.find(item => item.id === id);

            if (existingProduct) {
                // If product is already in the cart, increase quantity
                existingProduct.quantity += 1;
            } else {
                // If product is not in the cart, add a new entry with quantity 1
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
    }
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
