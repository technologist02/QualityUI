import { configureStore } from "@reduxjs/toolkit";
import  * as api from '../api';
import { client } from "../axios/interceptor";
import { filmsReducer } from "../features/films/films-slice";
import { editFilmReducer } from "../features/films/edit-film-slice";
import { extrudersReducer } from "../features/extruders/extruders-slice";
import { standartFilmsReducer } from "../features/standart-films/standart-films-slice";
import { standartTitlesReducer } from "../features/standart-titles/standart-titles-slice";
import { ordersReducer } from "../features/orders/orders-slice";

export const store = configureStore({
    reducer: {
      films: filmsReducer,
      editFilm: editFilmReducer,
      extruders: extrudersReducer,
      standartFilms: standartFilmsReducer,
      standartTitles: standartTitlesReducer,
      orders: ordersReducer,
    //   filter: filterReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: client,
                api
            }
        },
        serializableCheck: false,
    })
});