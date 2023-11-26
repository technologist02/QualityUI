import { createSlice } from "@reduxjs/toolkit";
import { loadFilms } from "./films/films-slice";
import { loadExtruders } from "./extruders/extruders-slice";
import { loadOrders } from "./orders/orders-slice";
import { loadStandartFilms } from "./standart-films/standart-films-slice";
import { loadStandartTitles } from "./standart-titles/standart-titles-slice";

const initialState = {
    statusLoad:{
        statusFilms: 'idle',
        statusExtruders: 'idle',
        statusOrders: 'idle',
        statusStandartFilms: 'idle',
        statusStandartTitles: 'idle'
    },
    errors: []
}

const appStatusLoadSlice = createSlice({
    name: "@@app-status-load",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.statusLoad.statusFilms = 'fulfilled'
            })
            .addCase(loadFilms.pending, (state, action) => {
                state.statusLoad.statusFilms = 'loading'
            })
            .addCase(loadExtruders.fulfilled, (state, action) => {
                state.statusLoad.statusExtruders = 'fulfilled'
            })
            .addCase(loadExtruders.pending, (state, action) => {
                state.statusLoad.statusExtruders = 'loading'
            })
            .addCase(loadOrders.fulfilled, (state, action) => {
                state.statusLoad.statusOrders = 'fulfilled'
            },)
            .addCase(loadOrders.pending, (state, action) => {
                state.statusLoad.statusOrders = 'loading'
            })
            .addCase(loadStandartFilms.fulfilled, (state, action) => {
                state.statusLoad.statusStandartFilms = 'fulfilled'
            })
            .addCase(loadStandartFilms.pending, (state, action) => {
                state.statusLoad.statusStandartFilms = 'loading'
            })
            .addCase(loadStandartTitles.fulfilled, (state, action) => {
                state.statusLoad.statusStandartTitles = 'fulfilled'
            })
            .addCase(loadStandartTitles.pending, (state, action) => {
                state.statusLoad.statusStandartTitles = 'loading'
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                // state.statusLoad.loading = 'rejected';
                // console.log(action)
                state.errors.push(action.payload || action.error.message);
                // console.log(state.error)
            })
    }
})

export const appStatusLoadReducer = appStatusLoadSlice.reducer;

