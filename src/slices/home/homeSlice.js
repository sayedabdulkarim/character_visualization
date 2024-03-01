import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "home",
  selectedCharacter: null,
  charactersList: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCharactersList: (state, action) => {
      state.charactersList = action.payload;
    },
    setSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const { setCharactersList, setSelectedCharacter } = homeSlice.actions;

export default homeSlice.reducer;
