import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Will store { ...product, quantity: 1 }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add a product to the cart
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      
      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }
      // If item already exists, we do nothing (as per "button disabled" logic)
    },
    // Action to increment quantity
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    // Action to decrement quantity
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity--;
        // If quantity reaches 0, remove the item
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      }
    },
    // Action to remove an item entirely
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.id !== itemId);
    },
  },
});

// Export the actions
export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;

// --- Selectors ---
// These functions are used by components to get data from the store
export const selectCartItems = (state) => state.cart.items;

export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalCost = (state) =>
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

export const selectItemIdsInCart = (state) =>
  state.cart.items.map((item) => item.id);


export default cartSlice.reducer;