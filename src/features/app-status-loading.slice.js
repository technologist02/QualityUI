import { createSlice } from "@reduxjs/toolkit";
import { loadFilms } from "./films/films-slice";
import { loadExtruders } from "./extruders/extruders-slice";
import { loadOrders } from "./orders/orders-slice";
import { loadStandartFilms } from "./standart-films/standart-films-slice";
import { loadStandartTitles } from "./standart-titles/standart-titles-slice";

const initialState = {
    statusLoad:{
        statusFilms: false,
        statusExtruders: false,
        statusOrders: false,
        statusStandartFilms: false,
        statusStandartTitles: false
    }
}

const appStatusLoadSlice = createSlice({
    name: "@@app-status-load",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.statusLoad.statusFilms = true
            })
            .addCase(loadExtruders.fulfilled, (state, action) => {
                state.statusLoad.statusExtruders = true
            })
            .addCase(loadOrders.fulfilled, (state, action) => {
                state.statusLoad.statusOrders = true
            },)
            .addCase(loadStandartFilms.fulfilled, (state, action) => {
                state.statusLoad.statusStandartFilms = true
            })
            .addCase(loadStandartTitles.fulfilled, (state, action) => {
                state.statusLoad.statusStandartTitles = true
            })
    }
})

export const appStatusLoadReducer = appStatusLoadSlice.reducer;

