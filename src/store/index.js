import { configureStore } from "@reduxjs/toolkit";
import  * as api from '../api';
import { client } from "../axios/interceptor";
import { filmsReducer } from "../features/films/films-slice";
import { editFilmReducer } from "../features/films/edit-film-slice";
import { extrudersReducer } from "../features/extruders/extruders-slice";
import { standartFilmsReducer } from "../features/standart-films/standart-films-slice";
import { standartTitlesReducer } from "../features/standart-titles/standart-titles-slice";
import { ordersReducer } from "../features/orders/orders-slice";
import { appStatusLoadReducer } from "../features/app-status-loading.slice";
import { editOrderReducer } from "../features/orders/edit-orders-slice";
import { filmsMapReducer } from "../features/films/films-map-slice";
import { userReducer } from "../features/users/users-slice";
import { editExtruderReducer } from "../features/extruders/edit-extruder-slice";
import { editStandartTitleReducer } from "../features/standart-titles/edit-standart-title-slice";
import { editStandartFilmReducer } from "../features/standart-films/edit-standart-film-slice";
import { rolesReducer } from "../features/admin-panel/roles-slice";


export const store = configureStore({
    reducer: {
      films: filmsReducer,
      editFilm: editFilmReducer,
      filmsMap: filmsMapReducer,
      extruders: extrudersReducer,
      editExtruder: editExtruderReducer,
      standartFilms: standartFilmsReducer,
      editStandartFilm: editStandartFilmReducer,
      standartTitles: standartTitlesReducer,
      editStandartTitle: editStandartTitleReducer,
      orders: ordersReducer,
      editOrder: editOrderReducer,
      appStatusLoad: appStatusLoadReducer,
      user: userReducer,
      roles: rolesReducer,
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