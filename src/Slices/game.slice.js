import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import game from "../Services/game.service";

const initialState = {
  game: [],
};


export const addNewGameThunk = createAsyncThunk(
  "game/addNewGameThunk",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      let response = await game.addNewGame(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getGamesByGsId_Thunk = createAsyncThunk(
  "game/getGamesByGsId_Thunk",
  async (data, { rejectWithValue }) => {
    try {
      let response = await game.getGamesByGs_Id(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);




export const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(addNewGameThunk.fulfilled, (state, { payload }) => {
        // state.game = payload;
      })
      .addCase(getGamesByGsId_Thunk.fulfilled, (state, { payload }) => {
        state.game = payload;
      })
  },
});


export default GameSlice.reducer;
