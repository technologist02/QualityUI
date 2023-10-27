import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalShow: false,
    film: {
        id: 0,
        mark: "",
        thickness: 0,
        color: "",
        density: 0
    }
}

const editFilmSlice = createSlice({
    name: '@@edit-film',
    initialState: initialState,
    reducers: {
        setFilmId: (state, action) => {
            state.film.id = action.payload
        },
        setMark : (state, action) => {
            state.film.mark = action.payload
        },
        setThick: (state, action) => {
            state.film.thickness = action.payload
        },
        setColor: (state, action) => {
            state.film.color = action.payload
        },
        setDensity: (state, action) => {
            state.film.density = action.payload
        },
        showFilmModal: (state, action) => {
            state.isModalShow = true;
            state.film = action.payload
        },
        resetModal: () => {
            return initialState
        }
    }
})

export const {setFilmId, setMark, setThick, setColor, setDensity, showFilmModal, resetModal} = editFilmSlice.actions;

export const editFilmReducer = editFilmSlice.reducer;