import { configureStore } from "@reduxjs/toolkit";
import  * as api from '../api'
import axios from "axios";
import { filmsReducer } from "../features/films/films-slice";
import { editFilmReducer } from "../features/films/edit-film-slice";

export const store = configureStore({
    reducer: {
      films: filmsReducer,
      editFilm: editFilmReducer,
    //   filter: filterReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        }
    })
});