import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = favouritesSlice.actions;
export const selectIsInFavourites = (state, itemId) =>
  state.favourites.items.some((item) => item.id === itemId);

export default favouritesSlice.reducer;
