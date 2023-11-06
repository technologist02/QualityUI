import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalShow: false,
    mode: "",
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
        changeFilm: (state, action) => {
            state.isModalShow = true;
            state.mode = `Изменить пленку ${action.payload.mark} ${action.payload.thickness} ${action.payload.color}`
            state.film = action.payload
        },
        addFilm: (state) => {
            state.isModalShow = true;
            state.mode = "Добавить пленку"
        },
        resetModal: () => {
            return initialState
        }
    }
})

export const {setFilmId, setMark, setThick, setColor, setDensity, changeFilm, addFilm, showFilmModal, resetModal} = editFilmSlice.actions;

export const editFilmReducer = editFilmSlice.reducer;