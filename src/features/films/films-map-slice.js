import { createSlice } from '@reduxjs/toolkit';
import { loadFilms } from './films-slice';
import { filmsParse } from '../../Entities/film';


const initialState = {
    films: [],
    filmsData : {
        marks: [],
        thicks: [],
        colors: []
    },
    currentFilmsValues : {
        mark: "",
        thick: "",
        color: ""
    }
}

const filmMapSlice = createSlice({
    name: '@@films-map',
    initialState: initialState,
    reducers: {
        chooseMark: (state, action) => {
            state.currentFilmsValues.mark = action.payload;
            state.currentFilmsValues.thick = "";
            state.currentFilmsValues.color = "";
            state.filmsData.thicks = filmsParse(state.films
                .filter(film => film.mark === action.payload)).thicks
        },
        chooseThickness: (state, action) => {
            state.currentFilmsValues.thick = action.payload;
            state.currentFilmsValues.color = "";
            state.filmsData.colors = filmsParse(state.films
                .filter(film => film.mark === state.currentFilmsValues.mark && film.thickness === action.payload)).colors
                
        },
        chooseColor: (state, action) => {
            state.currentFilmsValues.color = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadFilms.fulfilled, (state, action) => {
                state.films = action.payload.data;
                state.filmsData.marks = filmsParse(action.payload.data).marks;
            })
    }
})

export const filmsMapReducer = filmMapSlice.reducer;

