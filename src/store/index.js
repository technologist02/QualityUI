import { configureStore } from "@reduxjs/toolkit";
import  * as api from '../api'
import axios from "axios";
import { filmsReducer } from "../features/films/films-slice";

export const store = configureStore({
    reducer: {
      films: filmsReducer,
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