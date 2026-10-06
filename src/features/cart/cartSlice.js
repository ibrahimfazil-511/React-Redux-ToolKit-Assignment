import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((cartItem) => cartItem.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
                  const item = state.items.find((cartItem) => cartItem.id === action.payload);
            if (!item) return;
            if (item.quantity === 1) {
                state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
            } else {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        hydrateCart: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
    hydrateCart,
} = cartSlice.actions;

export default cartSlice.reducer;